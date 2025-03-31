type EventType = 'UserRegistered';

const handlers: Record<EventType, ((payload: any) => void)[]> = {
  UserRegistered: [],
};

export const publish = async (event: EventType, payload: any) => {
  for (const handler of handlers[event]) {
    await handler(payload);
  }
};

export const subscribe = (event: EventType, handler: (payload: any) => void) => {
  handlers[event].push(handler);
};