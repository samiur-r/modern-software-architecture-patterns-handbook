
import { Task } from '../../domain/entities/Task'
import { TaskOutputPort } from '../../ports/output/TaskOutputPort'

type Dependencies = {
  taskRepo: TaskOutputPort
}

export const createTask = ({ taskRepo }: Dependencies) =>
  async (userId: string, title: string): Promise<Task> => {
    if (!title) throw new Error('Task title is required')
    const task: Omit<Task, 'id'> = {
      userId,
      title,
      completed: false,
    }
    return await taskRepo.save(task)
  }
