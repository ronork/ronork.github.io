export default function cardTitle(title) {
  try {
    let crdTitle = title
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace(/[^a-zA-Z0-9-]/g, "");
    return crdTitle;
  } catch (error) {
    console.error(error);
    return "";
  }
}
