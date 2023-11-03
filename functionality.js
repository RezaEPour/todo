import { todo_list } from "./store.js";
import { syncStorage } from "./storage.js";
import { renderList } from "./dom.js";


export function toggleStatus(title) {
  
  todo_list.forEach((list_item) => {
    if (list_item.title === title) {
      
      list_item.status = !list_item.status;
    }
  });

  syncStorage();
}

export function addItem(item) {
  const next_item = {
    title: item.title,
    status: item.status,
  };
  todo_list.push(next_item);
}

export function remove(title) {
 
  todo_list.forEach((list_item, i) => {
    if (list_item.title === title) {
      todo_list.splice(i, 1);
    }
  });
  syncStorage();
  renderList();
}