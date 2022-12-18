function displayAllPostsPage() {
  window.location.href = "../html/postslist.html";
}

function createPostModalDisplay() {
  console.log("Create Post");
  let createPostModalElement = document.getElementById("createPostModal");
  let closeCreatePostElement =
    document.getElementsByClassName("closeCreatePost")[0];

  createPostModalElement.style.display = "block";

  closeCreatePostElement.onclick = function () {
    createPostModalElement.style.display = "none";
  };
}
