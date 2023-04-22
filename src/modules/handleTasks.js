import List from './toDoList.js';
import EditTask from './editTask.js';

class HandleTasks {
  constructor() {
    this.setControlls = () => {
      this.checkInputs = document.querySelectorAll('.checkbox');
      this.checkButtons = document.querySelectorAll('.check-btn');
      this.checkButtons.forEach((checkBox, index) => {
        checkBox.addEventListener('click', () => {
          this.checkCompleted(index);
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
    const input = this.Description[i];
    input.removeAttribute('readonly');
    EditTask.getDeleteTaskBtn(i);
    EditTask.delteTaskBtn.onclick = () => {
      EditTask.deleteTask(i);
      this.setControlls();
    };
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        EditTask.saveEdition(i, input);
        this.setControlls();
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        input.value = List.TaskList[i].description;
        EditTask.disableEdition(input);
        this.setControlls();
      }
    });
    this.Description[i].addEventListener('blur', (e) => {
      if (!e.target.classList.contains('delete-Task-Btn')) {
        EditTask.saveEdition(i, input);
        this.setControlls();
      }
    });
  }

  checkCompleted(i) {
    if (this.checkInputs[i].checked) {
      List.TaskList[i].completed = false;
    } else {
      List.TaskList[i].completed = true;
    }
    List.render();
    this.setControlls();
  }
}
const Tasks = new HandleTasks();

export default Tasks;
