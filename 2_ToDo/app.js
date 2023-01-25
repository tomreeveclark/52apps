let toDoItems = [];
const todolist = document.getElementById("todolist");

// add item to list
function addToList() {
  const newToDo = prompt("Please enter a new item.");
  toDoItems.push(newToDo);
  updateList();
}

// remove item from list
function removeFromList() {
  const remIndex = prompt(
    "Please enter the # of the item you would like to remove."
  );
  toDoItems.splice(remIndex - 1, 1);
  updateList();
}

// refresh list
function updateList() {
  todolist.replaceChildren();
  for (item of toDoItems) {
    const newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(item));
    todolist.appendChild(newLi);
  }
}

// Add listeners to buttons
const addItemButton = document.getElementById("newItemButton");
addItemButton.addEventListener("click", addToList);

const removeItemButton = document.getElementById("removeItemButton");
removeItemButton.addEventListener("click", removeFromList);
