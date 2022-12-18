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

function displaySignUpModal() {
  let signUpModalElement = document.getElementById("signUpModal");
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
  let signInModalElement = document.getElementById("signInModal");
  let closeElement = document.getElementsByClassName("close")[1];

  signInModalElement.style.display = "block";

  closeElement.onclick = function () {
    signInModalElement.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == signInModalElement) {
      signInModalElement.style.display = "none";
    }
  };
}

function redirectUserToSignUp() {
  let signUpModalElement = document.getElementById("signUpModal");
  let signInModalElement = document.getElementById("signInModal");
  let closeElement = document.getElementsByClassName("close")[0];

  signInModalElement.style.display = "none";
  signUpModalElement.style.display = "block";

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

function userSignUpClose() {
  let signUpModalElement = document.getElementById("signUpModal");

  signUpModalElement.style.display = "none";
}
