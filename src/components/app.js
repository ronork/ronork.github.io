import { h } from "preact";
import { Router } from "preact-router";

import Home from "../routes/home";
import Blogs from "../routes/blogs";
import BlogPage from "../routes/blogPage";
import Projects from "../routes/projects";

const App = () => (
  <div id="app">
    <Router>
      <Home path="/" />
      <Blogs path="/blogs/" />
      <Projects path="/projects/" />
      <BlogPage path="/blogs/:blogId" />
    </Router>
  </div>
);

export default App;
