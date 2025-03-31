import { behaviors, positions, velocities } from '../entities/registry';

export const aiSystem = () => {
  for (const [id, behaviorComp] of behaviors) {
    const pos = positions.get(id);
    const vel = velocities.get(id);
    if (!pos || !vel) continue;

    switch (behaviorComp.behavior) {
      case 'wander':
        vel.dx = Math.random() * 2 - 1;
        vel.dy = Math.random() * 2 - 1;
        break;
      case 'idle':
        vel.dx = 0;
        vel.dy = 0;
        break;
      case 'follow':
        vel.dx = 1;
        vel.dy = 0;
        break;
    }
  }
};