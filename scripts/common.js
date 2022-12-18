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
