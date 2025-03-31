type EventType = 'UserRegistered';

const listeners: Record<EventType, ((payload: any) => void)[]> = {
  UserRegistered: [],
};

export const publish = async (event: EventType, payload: any) => {
  for (const handler of listeners[event]) {
    await handler(payload);
  }
};

export const subscribe = (event: EventType, handler: (payload: any) => void) => {
  listeners[event].push(handler);
};