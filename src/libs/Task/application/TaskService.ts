import { ensureTaskIsValid, ensureTaskIsValidTitle } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

export const createTaskService = (repository: TaskRepository) => {
  return {
    getAll:async () => await repository.getAll(),
    save: async (id: string, title: string, isDone: boolean) => {
      ensureTaskIsValid(id);
      ensureTaskIsValidTitle(title);
      repository.save({
        id,
        title,
        isDone,
        createdAt: new Date(),
      });
    },
    delete: async (id: string) => {
      ensureTaskIsValid(id);
      repository.delete(id);
    },
  };
};
