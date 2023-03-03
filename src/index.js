import './style.css';
import List from './modules/toDoList.js';
import Edit from './modules/editTask.js';

const Render = () => {
  List.render();
  Edit.setControlls();
};

window.onload = () => {
  Render();
};

List.TaskInput.onkeydown = (e) => {
  if (e.key === 'Enter') {
    List.addNewItem();
    Render();
  }
};

List.AddTaskBtn.onclick = () => {
  List.addNewItem();
  Render();
};

List.Restart.onclick = () => {
  List.restart();
  Render();
};
