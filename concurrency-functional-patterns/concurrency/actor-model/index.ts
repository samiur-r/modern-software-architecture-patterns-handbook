import { start, spawn, dispatch, ActorRef } from 'nact';

const system = start();

// User actor
const createUser = (name: string) =>
  spawn(system, (state = {}, msg, ctx) => {
    console.log(`💬 ${name} received:`, msg);
    return state;
  }, name);

// Chat room actor
const chatRoom = spawn(system, (state = { users: [] as ActorRef[] }, msg, ctx) => {
  if (msg.type === 'JOIN') {
    return { users: [...state.users, msg.user] };
  }

  if (msg.type === 'MESSAGE') {
    state.users.forEach(user => dispatch(user, msg.text));
  }

  return state;
}, 'chatRoom');

// Users join
const alice = createUser('Alice');
const bob = createUser('Bob');

dispatch(chatRoom, { type: 'JOIN', user: alice });
dispatch(chatRoom, { type: 'JOIN', user: bob });

// Send message to all
dispatch(chatRoom, { type: 'MESSAGE', text: 'Hello everyone!' });
