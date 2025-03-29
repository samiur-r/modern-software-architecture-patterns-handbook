
import { Task } from '../../domain/entities/Task'

export interface TaskOutputPort {
  save(task: Omit<Task, 'id'>): Promise<Task>
  markComplete(taskId: string): Promise<void>
  getTasksForUser(userId: string): Promise<Task[]>
}
