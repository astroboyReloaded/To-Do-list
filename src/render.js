const list = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('list')) || [];

const renderTasks = () => list.innerHTML = tasks.map((task) => (`
<li class="task-item">
  <input id="check" type="checkbox">
  <label tabindex="${task.index}" class="task-label">
      ${task.description}
      <i class="trash"></i>
  </label>
</li>
`)).join('');

export {tasks, renderTasks};