import List from './toDoList.js';
import RmCompleted from './rmCompleted.js';

class EditTask {
  constructor() {
    this.setControlls = () => {
      this.drag = document.querySelectorAll('.drag-btn');
      this.delteTaskBtn = document.querySelectorAll('.delete-Task-Btn');
      this.Description = document.querySelectorAll('.task-description');
      this.Description.forEach((input, index) => {
        input.addEventListener('focusin', () => {
          this.enableEdition(index);
        });
      });
    };
  }

  enableEdition(i) {
    this.drag[i].classList.add('hide');
    this.delteTaskBtn[i].classList.remove('hide');
    this.delteTaskBtn[i].addEventListener('click', () => {
      List.TaskList.splice(i, 1);
      List.render();
      this.setControlls();
      RmCompleted.setControlls();
    });
    const input = this.Description[i];

    input.removeAttribute('readonly');

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.saveEdition(i, input);
      }
    });
    input.addEventListener('blur', (e) => {
      if (e.relatedTarget !== this.delteTaskBtn[i]) {
        this.saveEdition(i, input);
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        input.value = List.TaskList[i].description;
        this.disableEdition(input);
      }
    });
  }

  removeBtn() {
    this.delteTaskBtn.classList.remove('delete-Task-Btn');
    this.delteTaskBtn = null;
  }

  saveEdition(i, input) {
    List.TaskList[i].description = input.value;
    this.disableEdition(input);
  }

  disableEdition(input) {
    input.setAttribute('readonly', true);
    List.render();
    this.setControlls();
    RmCompleted.setControlls();
  }
}
const Edit = new EditTask();

export default Edit;
