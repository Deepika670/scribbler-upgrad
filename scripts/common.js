// function signUpDisplay() {
//   var signUpModal = document.getElementById("signUp-Modal");
//   var signUpButton = document.getElementById("signUpButton");
//   var signUpClose = document.getElementsByClassName("close")[0];
//   signUpButton.onclick = function () {
//     signUpModal.style.display = "block";
//   };
//   signUpClose.onclick = function () {
//     signUpModal.style.display = "none";
//   };
//   window.onclick = function (event) {
//     if (event.target == signUpModal) {
//       signUpModal.style.display = "none";
//     }
//   };
// }
// function signInDisplay() {
//   console.log("Sign In clicked");
//   var signInModal = document.getElementById("signIn-modal");
//   var signInButton = document.getElementById("signInButton");
//   var signInClose = document.getElementsByClassName("close-signIn")[0];
//   signInButton.onclick = function () {
//     signInModal.style.display = "block";
//   };
//   signInClose.onclick = function () {
//     signInModal.style.display = "none";
//   };
//   window.onclick = function (event) {
//     if (event.target == signInModal) {
//       signInModal.style.display = "none";
//     }
//   };
// }

// function createDisplay() {
//   var createModal = document.getElementById("create-post-modal");
//   var createButton = document.getElementById("create-modal");
//   var createClose = document.getElementsByClassName("close-create")[0];
//   createButton.onclick = function () {
//     createModal.style.display = "block";
//   };
//   createClose.onclick = function () {
//     createModal.style.display = "none";
//   };
//   window.onclick = function (event) {
//     if (event.target == createModal) {
//       createModal.style.display = "none";
//     }
//   };
// }

function displaySignUpModal() {
  let signUpModalElement = document.getElementById("signUp-Modal");
  let closeElement = document.getElementsByClassName("close")[0];

  signUpModalElement.style.display = "block";

  closeElement.onclick = function () {
    signUpModalElement.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == signUpModalElement) {
      signUpModalElement.style.display = "none";
    }
  };
}

function displaySignInModal() {
  let signInModalElement = document.getElementById("signIn-modal");
  let closeElement = document.getElementsByClassName("close")[1];

  signInModalElement.style.display = "block";

  closeElement.onclick = function () {
    console.log("something");
    signInModalElement.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == signInModalElement) {
      signInModalElement.style.display = "none";
    }
  };
}
