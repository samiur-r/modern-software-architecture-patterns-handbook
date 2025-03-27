import * as workerpool from "workerpool";

// Define a CPU-intensive task
function heavyTask(input: number): number {
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += Math.sqrt(i + input);
  }
  return result;
}

// If this file is being run as a worker thread, expose the function
if (workerpool.isMainThread === false) {
  workerpool.worker({
    heavyTask,
  });
} else {
  // MAIN THREAD: Create a pool and execute tasks

  async function runTasks() {
    // Create a pool from the same file (yes, it can act as both main & worker)
    const pool = workerpool.pool(__filename, {
      minWorkers: 2,
      maxWorkers: 4,
    });

    const inputs = [10, 20, 30, 40, 50];
    const promises = inputs.map((input) => pool.exec("heavyTask", [input]));

    const results = await Promise.all(promises);
    console.log("✅ Results:", results);

    await pool.terminate();
  }

  runTasks().catch(console.error);
}
