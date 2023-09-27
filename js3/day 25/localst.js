// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Retrieve tasks from local storage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// It's attempting to retrieve the "tasks" key from local storage using localStorage.getItem("tasks").
//If there are tasks stored in local storage (meaning the value associated with the key "tasks" is not null), the JSON string is converted into a JavaScript array of tasks using JSON.parse(...).
//If there are no tasks stored in local storage (meaning the value associated with the key "tasks" is null), an empty array [] is used as the default value.


//here local stoarge stores in key value pair .so to convert to array json.parse
// Function to render tasks on the page
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeTask(index));
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const newTask = taskInput.value;
    if (newTask.trim() !== "") { //removes extra spaces
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks)); //concert object /array to string 
        renderTasks();
        taskInput.value = "";
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1); //when you call tasks.splice(index, 1), you're telling JavaScript to start at the specified index in the tasks array and remove 1 element.
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Add event listener to the Add button
addButton.addEventListener("click", addTask);

// Initial rendering of tasks
renderTasks();