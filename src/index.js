import './style.css';
import { List } from './toDoList';
import { Edit } from './editor';

window.onload = () => {;
  List.render();
  Edit.setControlls();
}

List.TaskInput.onkeydown = (e) => {
  e.key === 'Enter' && List.addNewItem();
}

List.clearCompletedBtn.onclick = () => {
  List.clearAllCompleted();
}