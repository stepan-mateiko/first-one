// values that only have export
import { URLS, fetchData } from "./api.js";
// values that export default
import saveData from "./api.js";

const btn = document.getElementById("posts-btn");

btn.addEventListener("click", () => saveData(URLS.profile, { age: 32 }));

const posts = fetchData(URLS.posts).then((data) => data);
