
import { TaskOutputPort } from '../../ports/output/TaskOutputPort'

type Dependencies = {
  taskRepo: TaskOutputPort
}

export const completeTask = ({ taskRepo }: Dependencies) =>
  async (taskId: string) => {
    await taskRepo.markComplete(taskId)
  }
