import { positions, velocities } from '../entities/registry';

export const movementSystem = () => {
  for (const [id, pos] of positions) {
    const vel = velocities.get(id);
    if (vel) {
      pos.x += vel.dx;
      pos.y += vel.dy;
    }
  }
};