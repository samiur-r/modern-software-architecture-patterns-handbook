# 🔗 Chain of Responsibility Design Pattern

The **Chain of Responsibility** pattern allows you to **pass a request along a chain of handlers**. Each handler decides whether to process the request or pass it along to the next handler in the chain.

It falls under **Behavioral Design Patterns** and is especially useful when multiple objects might handle a request, but you don’t want the sender to be tightly coupled to the receiver.

---

## 🔍 Real-World Analogy

Imagine a **technical support system**:

- A customer sends a request.
- Level 1 support reviews it. If they can't solve it, they escalate to Level 2.
- If Level 2 still can't handle it, they escalate to a specialist.

Each level is a **handler**, and the request **flows through the chain** until someone processes it.

---

## ✅ Common Use Cases

- **Middleware pipelines** – e.g., Express.js or Koa HTTP request handlers.
- **Validation layers** – Input validation in forms or APIs.
- **Authorization/Authentication** – Multiple checks in sequence.
- **Logging systems** – File → Console → External Service.
- **Workflow engines** – Tasks executed in sequence or conditionally.
- **Game mechanics** – Event chains, item handling, or ability resolution.

---

## 🧠 Benefits

- **Loose coupling** – Senders don’t need to know which handler will process the request.
- **Flexible** – Easily add, remove, or reorder handlers.
- **Open/Closed Principle** – Modify behavior without touching existing handlers.
- **Single Responsibility** – Each handler focuses on a specific concern.

---

## ⚠️ Drawbacks

- **No guarantee of handling** – If no handler accepts the request, it may be dropped.
- **Debugging difficulty** – Hard to trace flow in complex chains.
- **Order-dependent** – Changing order can drastically affect behavior.

---

## 📌 Best Practices

- Keep each handler **focused on a single responsibility**.
- Ensure there is a **default handler** or fallback to prevent dropped requests.
- Combine with **logging or tracing** for observability.
- Document the **chain order** clearly when multiple handlers are used.

---

## 🔗 Related Patterns

| Pattern        | How It Relates                                   |
| -------------- | ------------------------------------------------ |
| **Command**    | CoR routes commands; Command encapsulates them.  |
| **Observer**   | Observer notifies all; CoR stops at one handler. |
| **Decorator**  | Decorators always continue; CoR may stop early.  |
| **Middleware** | Practical use of CoR in web frameworks.          |

---

> 💡 The Chain of Responsibility pattern is perfect for building **dynamic, flexible pipelines** that handle requests progressively — just like real-world workflows or middleware systems.
