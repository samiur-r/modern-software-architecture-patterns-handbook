
import { Request, Response } from 'express'
import * as repo from '../repositories/TaskRepository'
import { createTask } from '../../application/use-cases/createTask'
import { completeTask } from '../../application/use-cases/completeTask'

const createTaskHandler = async (req: Request, res: Response) => {
  const userId = req.user?.id || 'user-1'
  const { title } = req.body
  const useCase = createTask({ taskRepo: repo })
  try {
    const task = await useCase(userId, title)
    res.status(201).json(task)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const completeTaskHandler = async (req: Request, res: Response) => {
  const { taskId } = req.params
  const useCase = completeTask({ taskRepo: repo })
  try {
    await useCase(taskId)
    res.json({ message: 'Task completed' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export { createTaskHandler, completeTaskHandler }
