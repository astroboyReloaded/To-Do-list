let TaskList = [
  { description: 'Task2', completed: false, index: 1 },
  { description: 'Task2', completed: false, index: 2 },
  { description: 'Task3', completed: false, index: 3 },
];

const editTask = (i, value) => {
  TaskList[i].description = value;
  return TaskList;
};

const checkCompleted = (i) => {
  const checkInputs = [
    { checked: false },
    { checked: true },
    { checked: true },
  ];
  if (checkInputs[i].checked) {
    TaskList[i].completed = false;
  } else {
    TaskList[i].completed = true;
  }
  return TaskList;
};

const deleteCompleted = () => {
  TaskList = TaskList.filter((task) => !task.completed);
  return TaskList;
};

export { editTask, checkCompleted, deleteCompleted };
