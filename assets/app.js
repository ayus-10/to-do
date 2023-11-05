function addToDoItem() {
    // To get the input value for todo-item
    var todoTextElement = document.getElementById("todoText");
    var todoText = todoTextElement.value;

    // Create a new todo-item and add required content
    var toDoItem = document.createElement("div");
    toDoItem.classList.add("todo-item");
    const toDoItemContents =
        `<input type="checkbox" class="todo-item-checkbox" onclick="crossToDoItem(event)">
        <div type="text" class="todo-item-text" placeholder="Click to add a note">${todoText}</div>
        <button class="fa fa-close close-btn" onclick="removeToDoItem(event)"></button>`;
    toDoItem.innerHTML = toDoItemContents;

    // Append the created todo-item element to parent element
    const toDos = document.getElementsByClassName("todos")[0];
    toDos.append(toDoItem);

    // Make the input field empty for next use
    todoTextElement.value = '';
}

function removeToDoItem(event) {
    // Get the close-btn that has been clicked and remove its parent element
    var button = event.target;
    var toDoItem = button.parentElement;
    toDoItem.remove();
}

function crossToDoItem(event) {
    // Get the clicked checkbox and cross/uncross the corresponding todo text
    var todoItem = event.target.parentElement;
    var todoText = todoItem.getElementsByClassName("todo-item-text")[0];
    todoText.classList.toggle("crossed");
}