import { EventEmitter } from 'events';

type EventTypes = 'user_created';

const emitter = new EventEmitter();

export const publish = (event: EventTypes, payload: any) => {
  emitter.emit(event, payload);
};

export const subscribe = (event: EventTypes, handler: (payload: any) => void) => {
  emitter.on(event, handler);
};