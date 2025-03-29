import { Task } from '../../domain/entities/Task'

type Dependencies = {
  save: (task: Omit<Task, 'id'>) => Promise<Task>
}

export const createTask = ({ save }: Dependencies) =>
  async (userId: string, title: string): Promise<Task> => {
    if (!title) throw new Error('Task title is required')
    return await save({ userId, title, completed: false })
  }
