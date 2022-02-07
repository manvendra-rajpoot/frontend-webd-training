const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const removeBtn = document.querySelector(".todo span");
const list = document.querySelector(".todo");

taskList = [];
inputBox.onkeyup = () => {
    let task = inputBox.value;
    if (task.trim() != 0) {
    addBtn.classList.add("active");
    addBtn.onclick = () => {
        taskList.push(task);
        showTasks();
    };
    } else {
        addBtn.classList.remove("active");
    }
};

function showTasks() {
    let liTag = "";
    taskList.forEach((elements, index) => {
    liTag += "<li>" + elements + "<span onclick = removeTask(" + index + ")>x</span> <li>";
    });

    list.innerHTML = liTag;
    inputBox.value = "";
    addBtn.classList.remove("active");

    if (taskList.length > 0) {
        removeBtn.classList.add("active");
    } else {
        removeBtn.classList.remove("active");
    }
}

function removeTask(index) {
    taskList.splice(index, 1);
    showTasks();
}

