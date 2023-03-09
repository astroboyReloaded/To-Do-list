/**
 * @jest-environment jsdom
 */

import { editTask, TaskList, checkCompleted, deleteCompleted } from './Mock.js';

describe('Interactivity', () => {
  test('Edit Task', () => {
    editTask(0, 'Task1');
    expect(TaskList[0].description).toContain('Task1');
  });
  test('Check as Completed', () => {
    checkCompleted(1);
    expect(TaskList[1].completed).toBeFalsy();
  });
  test('Clear all Completed', () => {
    deleteCompleted();
    expect(TaskList).toHaveLength(2);
  })
});
