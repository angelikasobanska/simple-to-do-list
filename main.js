const form = document.querySelector("form");
const taskNumber = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const listItems = document.getElementsByClassName("task");
const inputAdd = document.querySelector(".add");
const inputSearch = document.querySelector(".search");
const deleteButton = document.querySelector(".delete-button");
const backdrop = document.querySelector(".backdrop");
const doneWindow = document.querySelector(".well-done-window");
const crossCircle = document.querySelector(".fa-times-circle");




const removeTask = (e) => {
    e.target.parentNode.style.textDecoration = "line-through";
    e.target.parentNode.style.textDecorationThickness = "0.2rem";
    e.target.parentNode.style.opacity = "0.5";
    e.target.remove();
}


const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputAdd.value;
    if (titleTask === "") return;
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = titleTask + "<i class='fas fa-check delete-icon'></i>";
    ul.appendChild(task);
    inputAdd.value = "";
    if (listItems.length >= 1) {
        deleteButton.style.display = "block";
    }
    task.querySelector(".fa-check ").addEventListener("click", removeTask);
}


const deleteAll = () => {
    ul.textContent = "";
    doneWindow.classList.add("open");
    backdrop.classList.add("open");
}

const closingWindow = () => {
    if (doneWindow) {
        doneWindow.classList.remove("open");
        backdrop.classList.remove("open");
    }
}

backdrop.addEventListener("click", function () {
    doneWindow.classList.remove("open");
    closingWindow();
});

if (crossCircle) {
    crossCircle.addEventListener("click", closingWindow);
}




form.addEventListener("submit", addTask);

deleteButton.addEventListener("click", deleteAll);