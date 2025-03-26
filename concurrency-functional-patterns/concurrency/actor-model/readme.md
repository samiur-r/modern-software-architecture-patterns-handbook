# 🎭 Actor Model in TypeScript with `nact`

This oiece of code demonstrates how to implement the **Actor Model** in TypeScript using [`nact`](https://www.npmjs.com/package/nact), a lightweight actor system library for Node.js.

The Actor Model enables **concurrent, message-driven systems** by isolating state and avoiding shared memory. Each actor:

- Has its own state.
- Communicates via asynchronous message passing.
- Can spawn other actors.
- Reacts to messages one at a time.

---

## 🔍 Real-World Analogy

Think of each actor like a **post office branch**:

- Each branch handles its own mail (state).
- It never shares its internal processes.
- Messages are passed back and forth like mail between offices.

No shared memory. No locking. Just messages.

---

## ✅ Common Use Cases

- **Chat systems** – Rooms and users as actors.
- **IoT systems** – Each device is an actor.
- **Gaming engines** – Players, NPCs, items are all actors.
- **Microservices** – Decoupled logic with message-passing.
- **Concurrent workflows** – Background jobs, retry queues.

---

## 🧠 Benefits

- **No shared state** → Avoids race conditions.
- **Highly concurrent** → Safe parallel execution.
- **Scalable** → Easy to distribute actors across threads/machines.
- **Fault-tolerant** → Failed actors don’t bring down the system.
- **Natural model for event-driven systems**.

---

## ⚠️ Drawbacks

- **Complex tracing** – Hard to follow message flow in large systems.
- **Message overhead** – Adds latency for simple tasks.
- **Learning curve** – Especially for devs used to OOP or procedural flows.
- **Delivery guarantees** – Must be designed to handle dropped/delayed messages.

---