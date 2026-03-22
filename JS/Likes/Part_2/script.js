let likes = [9, 12, 9];
let spans = [
    document.querySelector("#post-0"),
    document.querySelector("#post-1"),
    document.querySelector("#post-2")
];

function like(id) {
    spans[id].innerHTML = ++likes[id] + " like(s)";
}
