function addToDoItem(event) {
  // Prevent page refresh
  event.preventDefault();

  // To get the input value for todo-item
  var todoTextElement = document.getElementById("todoText");
  var todoText = todoTextElement.value;

  if (todoText == "") return;

  // Create a new todo-item and add required content
  var toDoItem = document.createElement("div");
  toDoItem.classList.add("todo-item");
  const toDoItemContents = `
    <input type="checkbox" class="todo-item-checkbox" onclick="crossToDoItem(event)">
    <div type="text" class="todo-item-text" placeholder="Click to add a note">${todoText}</div>
    <button class="fa fa-close close-btn" onclick="removeToDoItem(event)"></button>`;
  toDoItem.innerHTML = toDoItemContents;

  // Append the created todo-item element to parent element
  const toDosContainer = document.getElementsByClassName("todos-container")[0];
  toDosContainer.append(toDoItem);

  // Make the input field empty for next use
  todoTextElement.value = "";

  // Save the todos in local storage
  saveTodos();
}

function removeToDoItem(event) {
  // Get the close-btn that has been clicked and remove its parent element
  var button = event.target;
  var toDoItem = button.parentElement;
  toDoItem.remove();

  // Update the todos in local storage
  saveTodos();
}

function crossToDoItem(event) {
  // Get the clicked checkbox and cross/uncross the corresponding todo text
  var checkbox = event.target;
  var todoItem = checkbox.parentElement;
  var todoText = todoItem.getElementsByClassName("todo-item-text")[0];
  todoText.classList.toggle("crossed");

  // Add the attribute checked if the checkbox is checked, so that the checked state of checkbox can be stored in local storage
  if (checkbox.checked) checkbox.setAttribute("checked", "checked");
  else checkbox.removeAttribute("checked");

  // Update the todos in local storage
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", toDos.innerHTML);
}

function retrieveTodos() {
  toDos.innerHTML = localStorage.getItem("todos");
}

// Get all created todo-item
let toDos = document.getElementsByClassName("todos-container")[0];

// Retrieve previously created todo-item on load
retrieveTodos();
