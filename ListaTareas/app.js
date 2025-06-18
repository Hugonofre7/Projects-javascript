const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Array para almacenar tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Función para renderizar tareas
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;
    taskItem.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggleTask(${index})">${task.completed ? "❌ Desmarcar" : "✔ Completar"}</button>
        <button onclick="deleteTask(${index})">🗑 Eliminar</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
}

// Función para añadir tarea
function addTask() {
  const text = taskInput.value.trim();
  if (text !== "") {
    tasks.push({ text, completed: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
  }
}

// Función para eliminar tarea
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Función para marcar/desmarcar tarea
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Función para guardar en localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Renderizar tareas al cargar la página
renderTasks();
