function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("task-list");

    let li = document.createElement("li");
    li.innerHTML = `${taskValue} <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;

    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(taskElement) {
    let taskList = document.getElementById("task-list");
    taskList.removeChild(taskElement.parentElement);
}
