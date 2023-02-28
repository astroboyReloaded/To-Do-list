import './style.css';
import { List } from './toDoList';
// import { Edit } from './addNRemove';

window.onload = () => {;
  List.render();
}


List.TaskInput.onkeydown = (e) => {
  e.key === 'Enter' && List.addNewItem();
}