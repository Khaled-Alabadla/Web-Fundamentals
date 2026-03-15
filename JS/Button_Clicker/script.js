function toggleLogin(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hideElement(element) {
    element.remove();
}

function likeNinja() {
    alert("Ninja was liked");
}
