// scripts.js
const InputElement = document.querySelector(".new-task-input");
const AddTaskButton = document.querySelector('.new-task-button');
const TaskList = document.querySelector('.tasks-container');

const ValidateInput = () => InputElement.value.trim().length > 0;

const HandleAddTask = () => {
    const InputIsValid = ValidateInput();

    if (!InputIsValid) {
        InputElement.classList.add("error");
        return;
    }

    const newTask = document.createElement("li");
    newTask.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${InputElement.value}</span>
        <button class="edit-task-button">Editar</button>
        <button class="delete-task-button">Excluir</button>
    `;
    TaskList.appendChild(newTask);

    InputElement.value = "";
    InputElement.classList.remove("error");
};

AddTaskButton.addEventListener("click", HandleAddTask);

InputElement.addEventListener("input", () => {
    InputElement.classList.remove("error");
});

// Event listener for editing tasks
TaskList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("edit-task-button")) {
        const taskText = target.previousElementSibling;
        const newText = prompt("Editar tarefa:", taskText.textContent);
        if (newText !== null) {
            taskText.textContent = newText;
        }
    }
});

// Event listener for deleting tasks
TaskList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("delete-task-button")) {
        const taskItem = target.parentElement;
        TaskList.removeChild(taskItem);
    }
});
