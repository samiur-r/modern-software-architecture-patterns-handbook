type Dependencies = {
  markComplete: (taskId: string) => Promise<void>
}

export const completeTask = ({ markComplete }: Dependencies) =>
  async (taskId: string) => {
    await markComplete(taskId)
  }
