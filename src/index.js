import './style.css';

const tasks = [
  {
    description: 'Create an index.js file',
    completed: false,
    index: 1,
  },
  {
    description: 'Create a style.css file',
    completed: false,
    index: 2,
  },
  {
    description: 'Bundle into dist/ folder',
    completed: false,
    index: 3,
  },
];

const list = document.getElementById('taskList');

const iterateTasks = () => tasks.map(task => (`
<li class="list-item">
  <label class="task-label"><input class="check" type="checkbox">${task.description}</label>
</li>
`)).join('');

list.innerHTML = iterateTasks();