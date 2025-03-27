import { PositionComponent, VelocityComponent } from "./components";

// Moves entities based on their velocity
export const MovementSystem = () => {
  for (const [id, velocity] of VelocityComponent.entries()) {
    const position = PositionComponent.get(id);
    if (position) {
      position.x += velocity.dx;
      position.y += velocity.dy;
      console.log(`Entity ${id} moved to (${position.x}, ${position.y})`);
    }
  }
};
