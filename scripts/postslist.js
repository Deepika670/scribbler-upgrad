let deletionElement;

function deletePost(el) {
  deletionElement = el;

  displayDeletePostModal();
}

function displayDeletePostModal() {
  document.getElementById('deletePostConfirmationModal').style.display =
    'block';
}

function postDelete() {
  deletionElement.parentNode.parentNode.parentNode.style.display = 'none';
  // deletionElement.parentNode.parentNode.parentNode.remove();

  document.getElementById('deletePostConfirmationModal').style.display = 'none';
}

function discardDeletePost() {
  document.getElementById('deletePostConfirmationModal').style.display = 'none';
}
