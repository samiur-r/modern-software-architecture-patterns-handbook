import { Request, Response } from 'express'
import * as repo from '../../infrastructure/prisma/TaskRepository'
import { createTask } from '../../application/use-cases/createTask'
import { completeTask } from '../../application/use-cases/completeTask'

export const createTaskHandler = async (req: Request, res: Response) => {
  const userId = req.user?.id || 'user-1'
  const { title } = req.body

  const useCase = createTask({ save: repo.save })

  try {
    const task = await useCase(userId, title)
    res.status(201).json(task)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const completeTaskHandler = async (req: Request, res: Response) => {
  const { taskId } = req.params
  const useCase = completeTask({ markComplete: repo.markComplete })

  try {
    await useCase(taskId)
    res.json({ message: 'Task marked complete' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
