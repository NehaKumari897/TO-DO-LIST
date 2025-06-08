function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}

function toggleTask(span) {
    span.parentElement.classList.toggle("completed");
}
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="done-btn" onclick="markAsDone(this)">Mark as Done</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}

function markAsDone(button) {
    const task = button.parentElement;
    task.classList.toggle("completed");
    button.textContent = task.classList.contains("completed") ? "Done ✅" : "Mark as Done";
}
