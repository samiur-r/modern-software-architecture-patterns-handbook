
import express from 'express'
import { createTaskHandler, completeTaskHandler } from '../adapters/controllers/TaskController'

const app = express()
app.use(express.json())

app.post('/tasks', createTaskHandler)
app.patch('/tasks/:taskId/complete', completeTaskHandler)

app.listen(3000, () => console.log('Server running on port 3000'))
