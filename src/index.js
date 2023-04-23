import './style.css';
import List from './modules/toDoList.js';
import Tasks from './modules/handleTasks.js';

const Render = () => {
  List.render();
  Tasks.setControlls();
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

List.DeleteCompletedBtn.onclick = () => {
  List.deleteCompleted();
  Render();
};

List.Restart.onclick = () => {
  List.restart();
  Render();
};
