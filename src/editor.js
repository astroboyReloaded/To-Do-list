import { List } from "./toDoList.js";

class Editor {
  constructor() {
    this.setControlls = () => {
      this.checkInputs = document.querySelectorAll('.checkbox');
      this.checkButtons = document.querySelectorAll('.check-btn');
      this.checkButtons.forEach((checkBox, index) => {
        checkBox.onclick = () => {
          this.updateCompleted(index);
        }
      })
      this.descriptions = document.querySelectorAll('.task-description');
      this.taskItems = document.querySelectorAll('.task-item');
      this.taskItems.forEach((item, index) => {
        item.addEventListener('focusin', () => {
          this.displayOptions(index);
        })
      })
      this.optionsBtn = document.querySelectorAll('.options-icon');
      this.deleteTaskBtn = document.querySelectorAll('.delete-Task-Btn');
      List.ListContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('options-icon')) {
          this.optionsBtnIndex = e.target.classList[0] - 1;
          this.displayOptions(this.optionsBtnIndex);
          this.descriptions[this.optionsBtnIndex].focus();
          this.descriptions[this.optionsBtnIndex].select();
        } else if (e.target.classList.contains('delete-Task-Btn')) {
          this.deleteTask(e.target.classList[0] - 1);
        };
      })
    }
  }

  displayOptions(i) {
    // this.optionsBtn[i].classList.add('hide');
    this.descriptions[i].removeAttribute('readonly');
    this.descriptions[i].addEventListener('keydown', (e) => {
      e.key === 'Enter' && this.updateTaskDescription(i);
    })
    this.descriptions[i].addEventListener('focusout', () => {
      this.updateTaskDescription(i);
    })
    this.deleteTaskBtn[i].classList.remove('hide');
    
  }

  updateTaskDescription(i) {
    List.TaskList[i].description = this.descriptions[i].value;
    List.saveToLS();
    this.descriptions[i].setAttribute('readonly', true);
  }

  deleteTask(i) {
    List.TaskList = List.TaskList.filter((t, index) => index !== i);
    this.setIndex();
    List.saveToLS();
    List.render();
    this.setControlls();
  }

  updateCompleted(i) {
    this.checkInputs[i].checked
    ? List.TaskList[i].completed = false
    : List.TaskList[i].completed = true;
    List.saveToLS();
    List.render();
    this.setControlls();
  }

  setIndex() {
    List.TaskList.forEach((task, i) => {
      task.index = i + 1;
    })
  }
}

export const Edit = new Editor();