function addToDoItem() {
    const toDos = document.getElementsByClassName("todos")[0];
    var toDoItem = document.createElement("div");
    toDoItem.classList.add("todo-item");
    const toDoItemContents =
        `<input type="checkbox" class="todo-item-checkbox">
        <input type="text" class="todo-item-text" placeholder="Click to add a note">
        <button class="fa fa-close close-btn" onclick="removeToDoItem(event)"></button>`;
    toDoItem.innerHTML = toDoItemContents;
    toDos.append(toDoItem);
}

function removeToDoItem(event) {
    var button = event.target;
    var toDoItem = button.parentElement;
    toDoItem.remove();
}