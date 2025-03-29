
import { Task } from '../../domain/entities/Task'

export interface TaskInputPort {
  createTask(userId: string, title: string): Promise<Task>
  completeTask(taskId: string): Promise<void>
}
