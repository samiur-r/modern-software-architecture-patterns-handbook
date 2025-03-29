
import { prisma } from '../../lib/prisma'
import { Task } from '../../domain/entities/Task'
import { TaskOutputPort } from '../../ports/output/TaskOutputPort'

export const save = async (task: Omit<Task, 'id'>): Promise<Task> => {
  return prisma.task.create({ data: task })
}

export const markComplete = async (taskId: string): Promise<void> => {
  await prisma.task.update({
    where: { id: taskId },
    data: { completed: true },
  })
}

export const getTasksForUser = async (userId: string): Promise<Task[]> => {
  return prisma.task.findMany({ where: { userId } })
}

export default { save, markComplete, getTasksForUser } as TaskOutputPort
