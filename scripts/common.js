function signUpDisplay() {
  var signUpModal = document.getElementById("signUp-Modal");
  var signUpButton = document.getElementById("signUpButton");
  var span = document.getElementsByClassName("close")[0];
  signUpButton.onclick = function () {
    signUpModal.style.display = "block";
  };
  span.onclick = function () {
    signUpModal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == signUpModal) {
      signUpModal.style.display = "none";
    }
  };
}
function signInDisplay() {
  console.log("Sign In clicked");
  var signInModal = document.getElementById("signIn-modal");
  var signInButton = document.getElementById("signInButton");
  var span = document.getElementsByClassName("close-signIn");
  signInButton.onclick = function () {
    signInModal.style.display = "block";
  };
  span.onclick = function () {
    signInModal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == signInModal) {
      signInModal.style.display = "none";
    }
  };
}

function createDisplay() {
  var createModal = document.getElementById("create-post-modal");
  var createButton = document.getElementById("create-modal");
  var span = document.getElementsByClassName("close-create")[0];
  createButton.onclick = function () {
    createModal.style.display = "block";
  };
  span.onclick = function () {
    createModal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == createModal) {
      createModal.style.display = "none";
    }
  };
}
