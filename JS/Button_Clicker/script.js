function toggleLogin(element) {
  if (element.innerText === "Login") {
    element.innerText = "Logout";
    element.classList.add("red");
    element.classList.remove("blue");
  } else {
    element.innerText = "Login";
    element.classList.add("blue");
    element.classList.remove("red");
  }
}

function hideElement(element) {
  element.remove();
}

function likeNinja() {
  alert("Ninja was liked");
}
