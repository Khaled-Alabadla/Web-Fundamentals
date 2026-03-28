let requestSpan = document.querySelector("#requestCount");
let connectionSpan = document.querySelector("#connectionCount");
let username = document.querySelector("#userName");
let list = document.querySelector('.connections-list');

function accept(element) {
    parent = element.parentElement.parentElement;
    let name = parent.querySelector('.user-info')
    parent.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
    list.innerHTML += name.innerHTML
}

function ignore(element) {
    element.parentElement.parentElement.remove();
    requestSpan.innerText--;
}

function edit() {
    if (username.innerText == "Khaled Esam") {
        username.innerText = "Khaled Alabadla";
    } else {
        username.innerText = "Khaled Esam"
    }
}