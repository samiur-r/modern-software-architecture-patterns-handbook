import { v4 as uuidv4 } from 'uuid';
import { positions, velocities, behaviors } from './entities/registry';
import { aiSystem } from './systems/aiSystem';
import { movementSystem } from './systems/movementSystem';

const createBot = (behavior: 'idle' | 'wander' | 'follow') => {
  const id = uuidv4();
  positions.set(id, { x: 0, y: 0 });
  velocities.set(id, { dx: 0, dy: 0 });
  behaviors.set(id, { behavior });
  return id;
};

const bots = [
  createBot('wander'),
  createBot('follow'),
  createBot('idle'),
];

const tick = () => {
  aiSystem();
  movementSystem();
  for (const id of bots) {
    const pos = positions.get(id);
    const vel = velocities.get(id);
    const beh = behaviors.get(id);
    console.log(`Bot ${id.slice(0, 4)} | ${beh?.behavior} | Pos: (${pos?.x.toFixed(2)}, ${pos?.y.toFixed(2)}) Vel: (${vel?.dx.toFixed(2)}, ${vel?.dy.toFixed(2)})`);
  }
  console.log('---');
};

setInterval(tick, 1000);