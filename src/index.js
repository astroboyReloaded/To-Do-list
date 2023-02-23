import './style.css';
import { tasks, renderTasks } from './render';
import {addTask, pushTask } from './addNRemove';



addTask.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    pushTask();
    renderTasks();
  }
});



window.onload = renderTasks();

