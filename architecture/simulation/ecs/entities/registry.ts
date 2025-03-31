import { Position } from '../components/position';
import { BehaviorComponent } from '../components/behavior';
import { Velocity } from '../components/velocity';

export type Entity = string;

export const positions = new Map<Entity, Position>();
export const behaviors = new Map<Entity, BehaviorComponent>();
export const velocities = new Map<Entity, Velocity>();