const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

// Setup paths
const blogsDir = path.join(__dirname, '../content/blogs');
const blogListOut = path.join(__dirname, '../src/data/blogList.json');
const blogDataOut = path.join(__dirname, '../src/data/blogData.json');
const prerenderOut = path.join(__dirname, '../prerender-urls.json');

// Replicate cardTitle helper logic
function cardTitle(title) {
  try {
    return title
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace(/[^a-zA-Z0-9-]/g, "");
  } catch (error) {
    console.error(error);
    return "";
  }
}

function build() {
  console.log('Compiling markdown blogs...');

  if (!fs.existsSync(blogsDir)) {
    console.error(`Blogs directory not found at: ${blogsDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(blogsDir).filter(file => file.endsWith('.md'));
  const blogs = [];

  for (const file of files) {
    const filePath = path.join(blogsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    if (!data.title || !data.date) {
      console.warn(`Warning: Skipping ${file} due to missing title or date in frontmatter.`);
      continue;
    }

    const htmlContent = marked.parse(content);
    const slug = cardTitle(data.title);
    const d = new Date(data.date);
    const seconds = Math.floor(d.getTime() / 1000);

    blogs.push({
      slug,
      title: data.title,
      description: data.description || "",
      timestamp: {
        _seconds: seconds,
        _nanoseconds: 0
      },
      content: htmlContent.trim()
    });
  }

  // Sort by date descending (latest first)
  blogs.sort((a, b) => b.timestamp._seconds - a.timestamp._seconds);

  // Compute prev/next links
  // In sorted list (descending):
  // - prevBlog is newer (index i - 1)
  // - nextBlog is older (index i + 1)
  for (let i = 0; i < blogs.length; i++) {
    const current = blogs[i];
    const prevBlog = i > 0 ? blogs[i - 1] : null;
    const nextBlog = i < blogs.length - 1 ? blogs[i + 1] : null;

    current.prevBlogTitle = prevBlog ? prevBlog.title : "";
    current.prevBlogUrl = prevBlog ? `/blogs/${prevBlog.slug}/` : "";
    current.nextBlogTitle = nextBlog ? nextBlog.title : "";
    current.nextBlogUrl = nextBlog ? `/blogs/${nextBlog.slug}/` : "";
  }

  // Generate blogList.json format
  const blogListData = {
    data: blogs.map(b => ({
      title: b.title,
      description: b.description,
      timestamp: b.timestamp
    }))
  };

  // Generate blogData.json format
  const blogDataMap = {};
  for (const b of blogs) {
    blogDataMap[b.slug] = {
      data: {
        title: b.title,
        description: b.description,
        timestamp: b.timestamp,
        content: b.content,
        prevBlogTitle: b.prevBlogTitle,
        prevBlogUrl: b.prevBlogUrl,
        nextBlogTitle: b.nextBlogTitle,
        nextBlogUrl: b.nextBlogUrl
      }
    };
  }

  // Generate prerender-urls.json format
  const prerenderUrls = [
    { url: "/" },
    { url: "/blogs/" },
    { url: "/projects/" }
  ];
  for (const b of blogs) {
    prerenderUrls.push({ url: `/blogs/${b.slug}/` });
  }

  // Write outputs
  fs.writeFileSync(blogListOut, JSON.stringify(blogListData, null, 2));
  console.log(`Saved ${blogs.length} entries to blogList.json`);

  fs.writeFileSync(blogDataOut, JSON.stringify(blogDataMap, null, 2));
  console.log(`Saved full content of ${blogs.length} blogs to blogData.json`);

  fs.writeFileSync(prerenderOut, JSON.stringify(prerenderUrls, null, 2));
  console.log(`Saved prerender config to prerender-urls.json`);

  console.log('Markdown blog compilation successful.');
}

build();
