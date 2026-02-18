function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 4000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data...");
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();
    // There is a better way of handling this using promise all

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    // So basically this promise.all take arrays as parameters and you can provie all the functions that you want to fetch, so for ofc 2 return type I wll have to create 2 var and assign it to them which is done like : const [postData, commentData]

    console.log(postData);
    console.log(commentData);
    console.log("Fetch complete");
  } catch (error) {
    console.error("Error fetching blog data", error);
  }
}
getBlogData();
