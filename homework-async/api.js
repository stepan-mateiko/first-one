const _baseEndPoint = "http://localhost:3000";
export const URLS = {
  posts: "/post",
  posts: "/comments",
  posts: "/profile",
};
export const fetchData = async (url) => {
  // basepoint+url
  const modifiedUrl = _baseEndPoint + url;
  try {
    const response = await fetch(modifiedUrl);
    const result = (await response).json();
    console.log(response, result);
    return result;
  } catch (error) {
    return error;
  }
};

const saveData = async (url, body) => {
  const modifiedUrl = _baseEndPoint + url;

  try {
    await fetch(modifiedUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    return error;
  }
};

export default saveData;
