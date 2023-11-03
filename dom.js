import { todo_list } from "./store.js";
import { toggleStatus, remove } from "./functionality.js";


const list = document.querySelector(".list");
export const title_input = document.querySelector("#title");

export function renderItem(todo_item) {
   
  const item = document.createElement("div");
  item.classList.add("todo");

  
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo_item.status;

  
  const span = document.createElement("span");
  span.textContent = todo_item.title;

  
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete";

  item.appendChild(checkbox);
  item.appendChild(span);
  item.appendChild(deleteButton);

  list.appendChild(item);

  checkbox.addEventListener("click", () => {
    toggleStatus(todo_item.title);
  });

  deleteButton.addEventListener("click", () => {
    remove(todo_item.title);
  });
}

export function renderList() {
  
  list.innerHTML = "";

  todo_list.forEach((item) => {
    renderItem(item);
  });
}

export function clearInput() {
  title_input.value = "";
}