let addInput = document.getElementById("add-input");
let addBtn = document.getElementById("add-btn");
let taskStatus = document.querySelector(".task-status");

function addTask() {
    if (addInput.value === "") {
        alert("You must add a task");
    } else {
        let span = document.createElement("span");
        let p = document.createElement("p");
        let removebtn = document.createElement("button");
        let task = document.createElement("div");
        task.appendChild(span);
        task.appendChild(p);
        task.appendChild(removebtn);
        taskStatus.appendChild(task);
        span.innerHTML = "\u2713";
        removebtn.innerHTML = "remove";
        task.style.borderBottom = "1px solid rgba(0 , 0 , 0 , .3)";
        p.innerHTML = addInput.value;
    }
    addInput.value = "";
    saveData();
}
taskStatus.addEventListener("click" , (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "P") {
        e.target.classList.toggle("style");
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data" , taskStatus.innerHTML);
}
function showData() {
    taskStatus.innerHTML = localStorage.getItem("data");
}
showData();




