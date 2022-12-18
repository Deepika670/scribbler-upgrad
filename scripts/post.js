let pageTitleText = localStorage.getItem("postTitle");
let pageAuthorText = localStorage.getItem("postAuthor");
let pageDescriptionText = localStorage.getItem("postDescription");

let pageTitleElement = document.getElementById("pageTitle");
let pageAuthorElement = document.getElementById("pageAuthor");
let pageDescriptionElement = document.getElementById("pageDescription");

let editPageElement = document.getElementById("editPage");

pageTitleElement.innerHTML = pageTitleText;
pageAuthorElement.innerHTML = pageAuthorText;
pageDescriptionElement.innerHTML = pageDescriptionText;

let isEditButtonActive = false;

function editPage() {
  // console.log(editPageElement.innerText);
  // if (editPageElement.innerText === 'Edit') {
  if (!isEditButtonActive) {
    pageTitleElement.setAttribute("contenteditable", true);
    pageDescriptionElement.setAttribute("contenteditable", true);

    pageTitleElement.style.outline = "2px solid pink";
    pageDescriptionElement.style.outline = "2px solid pink";
    editPageElement.innerHTML = "Save <i class='fa fa-save'></i>";
    editPageElement.addEventListener("click", savePage);
    isEditButtonActive = false;
  }
  // if (isEditButtonActive) {
  //   editPageElement.innerText = 'Edited Saved';
  // }

  // editPageElement.innerText = 'Save';
  // }
  // else if (editPageElement.innerText === 'Save') {
  //   pageTitleElement.setAttribute('contenteditable', false);
  //   pageDescriptionElement.setAttribute('contenteditable', false);

  //   pageTitleElement.style.outline = 'none';
  //   pageDescriptionElement.style.outline = 'none';
  //   editPageElement.innerText === 'Edit';
  // }
}

function savePage() {
  if (!isEditButtonActive) {
    pageTitleElement.setAttribute("contenteditable", false);
    pageDescriptionElement.setAttribute("contenteditable", false);

    pageTitleElement.style.outline = "none";
    pageDescriptionElement.style.outline = "none";

    editPageElement.innerHTML = "Edit <i class='fa fa-edit'></i>";
    editPageElement.addEventListener("click", editPage);
  }
}

function addComments(id) {
  var addEventName = id.value + "<br>";

  if (addEventName === "<br>") {
    alert("Please enter a valid comment");
  } else {
    var a = document.getElementById("userComments");
    document.getElementById("commentsContainer").style.display = "block";
    document.getElementById("commentsContainer").innerHTML =
      "<p>" +
      addEventName +
      "</p>" +
      document.getElementById("commentsContainer").innerHTML;
    a.value = a.defaultValue;
  }
}

var numberOfClicks = 0;
function postLiked() {
  document.getElementById("likeBlog").innerHTML =
    "<i class='fa fa-thumbs-up'></i> Liked!";
  numberOfClicks += 1;
  if (numberOfClicks != 0) {
    if (numberOfClicks == 1) {
      document.getElementById("commentCount").innerHTML =
        numberOfClicks + " person likes this!";
    } else {
      document.getElementById("commentCount").innerHTML =
        numberOfClicks + " people have liked this!";
    }
  }
}
