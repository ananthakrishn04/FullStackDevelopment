document.getElementById("demo").innerText = "Hello World!";

var list = document.getElementById("rand-list");

document.getElementById("create-btn").addEventListener("click",function () {
    var num = list.children[list.childElementCount-1].innerHTML;

    num = parseInt(num) + 1;

    var newLi = document.createElement("li");
    newLi.innerText = num.toString();
    list.appendChild(newLi);
});