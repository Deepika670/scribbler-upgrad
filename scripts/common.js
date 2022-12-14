function display(){
    var signUpModal = document.getElementById("signUp-Modal");
    var signUpButton = document.getElementById("signUpButton");
    var span = document.getElementsByClassName("close")[0];
    signUpButton.onclick = function() {
        signUpModal.style.display = "block";
      }
    span.onclick = function(){
        signUpModal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == signUpModal){
            signUpModal.style.display = "none";
        }
    }
}
function signInDisplay(){
    var signInModal = document.getElementById("signIn-modal");
    var signInButton = document.getElementById("signInButton");
    var span = document.getElementsByClassName("close-signIn")[0];
    signInButton.onclick = function() {
        signInModal.style.display = "block";
      }
    span.onclick = function(){
        signInModal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == signInModal){
            signInModal.style.display = "none";
        }
    }
}
