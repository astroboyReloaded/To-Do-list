let TaskList = [
  { description: 'Task2', completed: false, index: 1 },
  { description: 'Task2', completed: false, index: 2 },
  { description: 'Task3', completed: false, index: 3 },
];

const editTask = (i, value) => {
  TaskList[i].description = value;
};

const checkCompleted = (i) => {
  const checkInputs = [
    { checked: false },
    { checked: true },
    { checked: false },
  ];
  if (checkInputs[i].checked) {
    TaskList[i].completed = false;
  } else {
    TaskList[i].completed = true;
  }
};
checkCompleted(0);

const deleteCompleted = () => {
  TaskList = TaskList.filter((task) => !task.completed);
}

export { editTask, TaskList, checkCompleted, deleteCompleted };
