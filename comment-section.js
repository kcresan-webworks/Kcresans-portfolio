const inputBox = document.getElementById("input-box");
const button = document.getElementById("comment-submit");
const list = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === '') {
        alert("you must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML = "x";
        span.classList.add("delete-btn");   
        li.appendChild(span);
    }
    saveData(); 
}
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        saveData();
    }
});

button.addEventListener("click", addTask);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}
function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        list.innerHTML = savedData;
    }
}
window.addEventListener("load", showTask);