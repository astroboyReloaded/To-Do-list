import List from './toDoList.js';
/* eslint-disable import/no-cycle */
import Edit from './editTask.js';

class RmCompleted {
  constructor() {
    this.setControlls = () => {
      this.checkInputs = document.querySelectorAll('.checkbox');
      this.checkButtons = document.querySelectorAll('.check-btn');
      this.checkButtons.forEach((checkBox, index) => {
        checkBox.addEventListener('click', () => {
          this.checkCompleted(index);
        });
      });
    };
  }

  checkCompleted(i) {
    if (this.checkInputs[i].checked) {
      List.TaskList[i].completed = false;
    } else {
      List.TaskList[i].completed = true;
    }
    List.render();
    this.setControlls();
    Edit.setControlls();
  }
}
const Completed = new RmCompleted();

export default Completed;
