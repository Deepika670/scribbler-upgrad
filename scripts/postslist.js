let deletionElement;

function deletePost(id) {
  deletionElement = document.getElementById(id);

  displayDeletePostModal();
}

function displayDeletePostModal() {
  document.getElementById("deletePostConfirmationModal").style.display =
    "block";
}

function postDelete() {
  deletionElement.style.display = "none";

  document.getElementById("deletePostConfirmationModal").style.display = "none";
}

function discardDeletePost() {
  document.getElementById("deletePostConfirmationModal").style.display = "none";
}

function postPage(author, title, description) {
  let postAuthor = document.getElementById(author).innerText;
  let postTitle = document.getElementById(title).innerText;
  let postDescription = document.getElementById(description).innerText;

  localStorage.setItem("postAuthor", postAuthor);
  localStorage.setItem("postTitle", postTitle);
  localStorage.setItem("postDescription", postDescription);

  window.location.href = "../html/post.html";
}
