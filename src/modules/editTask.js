import List from './toDoList.js';

class EditTask {
  constructor(i) {
    this.deleteTaskBtn = document.getElementById(`delete-Task-Btn${i}`);
    this.dragBtn = document.getElementById(`drag-btn${i}`);
    this.dragBtn.classList.add('hide');
    this.deleteTaskBtn.classList.remove('hide');
  }

  saveEdition(i, input) {
    List.TaskList[i].description = input.value;
    this.disableEdition(input);
  }

  disableEdition(input) {
    input.setAttribute('readonly', true);
    this.deleteTaskBtn.classList.add('hide');
    this.dragBtn.classList.remove('hide');
    List.render();
  }
}

export default EditTask;
