const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

function addTask() {

  if (taskInput.value.trim() === "") {

    alert("Please enter a task!");

    return;

  }

  let li = document.createElement("li");

  li.innerHTML = `

    <span onclick="toggleDone(this)">${taskInput.value}</span>

    <button class="delete" onclick="deleteTask(this)">X</button>

  `;

  taskList.appendChild(li);

  taskInput.value = "";

}

function toggleDone(task) {

  task.parentElement.classList.toggle("done");

}

function deleteTask(button) {

  button.parentElement.remove();

}