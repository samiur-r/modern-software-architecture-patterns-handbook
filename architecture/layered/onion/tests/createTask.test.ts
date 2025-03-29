import { createTask } from '../src/application/use-cases/createTask'

test('creates a new task', async () => {
  const save = jest.fn().mockResolvedValue({
    id: 't1',
    userId: 'u1',
    title: 'Test Task',
    completed: false,
  })

  const useCase = createTask({ save })
  const result = await useCase('u1', 'Test Task')

  expect(result.title).toBe('Test Task')
  expect(save).toHaveBeenCalled()
})
