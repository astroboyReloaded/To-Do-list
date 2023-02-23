import { tasks } from "./render.js";

const addTask = document.getElementById('task-input');
const taskItem = Array.from(document.getElementsByClassName('task-item'));

const saveToLS = () => localStorage.setItem('list', JSON.stringify(tasks));

const pushTask = () => {
  let i = tasks.length;
  tasks.push({
    description: addTask.value,
    completed: false,
    index: i + 1
  });
  saveToLS();
  addTask.value = '';
  addTask.focus()
}

// taskItem.forEach(item => item.addEventListener(''))

const removeTask = () => {

}

export {addTask, pushTask};