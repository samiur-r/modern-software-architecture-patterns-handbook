export type Position = {
    x: number;
    y: number;
  };
  
  export type Velocity = {
    dx: number;
    dy: number;
  };
  
  export const PositionComponent = new Map<number, Position>();
  export const VelocityComponent = new Map<number, Velocity>();
  