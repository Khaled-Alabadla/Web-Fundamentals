let requestSpan = document.querySelector("#requestCount");
let connectionSpan = document.querySelector("#connectionCount");
let username = document.querySelector("#userName");

function accept(element) {
    let elementToRemove = element.parentElement.parentElement;
    elementToRemove.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(element) {
    let elementToRemove = element.parentElement.parentElement;
    elementToRemove.remove();
    requestSpan.innerText--;
}

function edit() {
    username.innerText = "Khaled Alabadla";
}
