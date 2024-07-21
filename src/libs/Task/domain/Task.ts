import {v4, validate} from 'uuid';

export interface Task {
  id: string;
  title: string;
  isDone: boolean;
  createdAt: Date;
}

export const generateTaskId =() => v4();

export function isValidTaskId(id: string): boolean {
  return validate(id);
}

export function ensureTaskIsValid(id: string): void {
    if(!isValidTaskId(id)) {
        throw new Error('Task id is required');
    }
}

export function isValidTaskTitle(title: string): boolean {
  return title.length > 0;
}

export function ensureTaskIsValidTitle(title: string): void {
  if(!isValidTaskTitle(title)) {
    throw new Error('Task title is required');
  }
}