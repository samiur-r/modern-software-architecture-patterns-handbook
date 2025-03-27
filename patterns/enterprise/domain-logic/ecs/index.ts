import { createEntity } from "./ecs/EntityManager";
import {
  PositionComponent,
  VelocityComponent,
} from "./ecs/components";
import { MovementSystem } from "./ecs/systems";

// Create two entities
const player = createEntity();
const enemy = createEntity();

// Assign components
PositionComponent.set(player, { x: 0, y: 0 });
VelocityComponent.set(player, { dx: 1, dy: 1 });

PositionComponent.set(enemy, { x: 5, y: 5 });
VelocityComponent.set(enemy, { dx: -1, dy: 0 });

// Simulate 5 ticks
for (let i = 0; i < 5; i++) {
  console.log(`--- Tick ${i + 1} ---`);
  MovementSystem();
}


// Output

// --- Tick 1 ---
// Entity 1 moved to (1, 1)
// Entity 2 moved to (4, 5)
// --- Tick 2 ---
// Entity 1 moved to (2, 2)
// Entity 2 moved to (3, 5)
// ...