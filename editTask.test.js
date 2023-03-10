/**
 * @jest-environment jsdom
 */

import {
  editTask, checkCompleted, deleteCompleted,
} from './Mock.js';

describe('Interactivity', () => {
  test('Edit Task', () => {
    expect(editTask(0, 'Task1')).toStrictEqual([
      { description: 'Task1', completed: false, index: 1 },
      { description: 'Task2', completed: false, index: 2 },
      { description: 'Task3', completed: false, index: 3 },
    ]);
  });
  test('Check as Completed', () => {
    expect(checkCompleted(0)).toStrictEqual([
      { description: 'Task1', completed: true, index: 1 },
      { description: 'Task2', completed: false, index: 2 },
      { description: 'Task3', completed: false, index: 3 },
    ]);
  });
  test('Clear all Completed', () => {
    expect(deleteCompleted()).toStrictEqual([
      { description: 'Task2', completed: false, index: 2 },
      { description: 'Task3', completed: false, index: 3 },
    ]);
  });
});
