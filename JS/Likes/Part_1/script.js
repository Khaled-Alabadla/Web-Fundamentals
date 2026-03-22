let count = 3;
let countElement = document.querySelector("#like-count");

function addLike() {
    countElement.innerText = ++count + " like(s)";
}
