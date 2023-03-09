import List from './toDoList.js';

class EditTask {
  constructor() {
    this.setControlls = () => {
      this.Options = document.querySelectorAll('.options-icon');
      this.Options.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          this.enableEdition(index);
          this.Description[index].focus();
        });
      });
      this.Description = document.querySelectorAll('.task-description');
      this.Description.forEach((input, index) => {
        input.addEventListener('focusin', () => {
          this.enableEdition(index);
        });
      });
    };
  }

  enableEdition(i) {
    this.delteTaskBtn = document.getElementById(`delete-Task-Btn${i + 1}`);
    this.delteTaskBtn.classList.add('delete-Task-Btn');
    this.delteTaskBtn.onclick = () => {
      List.TaskList = List.TaskList.filter((t, index) => index !== i);
      List.render();
      this.setControlls();
    };
    const input = this.Description[i];

    input.removeAttribute('readonly');

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.saveEdition(i, input);
      }
    });
    input.addEventListener('blur', () => {
      this.saveEdition(i, input);
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
  }
}
const Edit = new EditTask();

export default Edit;
