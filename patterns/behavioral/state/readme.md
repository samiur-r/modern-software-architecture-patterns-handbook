# 🔄 State Design Pattern

The **State** pattern allows an object to **change its behavior when its internal state changes**, as if it were dynamically changing its class.

It falls under **Behavioral Design Patterns** and is ideal when an object must behave differently depending on its current state — without bloating the code with conditionals.

---

## 🔍 Real-World Analogy

Think of a **traffic light** 🚦. It switches between `Red`, `Green`, and `Yellow`, and each light defines its own behavior for what should happen next.

- The **traffic light** is the **context**.
- The **light color** is the **state**.
- Switching states changes behavior.

---

## ✅ Common Use Cases

- **UI Components** – Buttons with `enabled`, `disabled`, `loading` states.
- **Media Players** – `playing`, `paused`, `stopped`.
- **E-commerce Orders** – `pending`, `confirmed`, `shipped`, `delivered`, `canceled`.
- **User Authentication** – `guest`, `logged in`, `banned`, `expired`.
- **Game Entities** – Characters with `idle`, `attacking`, `stunned`, `dead` states.

---

## 🧠 Benefits

- **Encapsulates state-specific behavior** – No more massive `if/else` or `switch`.
- **Respects Open/Closed Principle** – Add new states without changing the core.
- **Clear transitions** – Improves code readability and maintainability.
- **Simplifies debugging** – Easier to reason about each state in isolation.

---

## ⚠️ Drawbacks

- **More classes or functions** – Especially in OOP, each state becomes a class.
- **Possible duplication** – Shared logic must be carefully abstracted.
- **Can be overkill** – For simple states, a simple conditional may be enough.

---

## 📌 Best Practices

- Use State Pattern when your object has **well-defined, exclusive states**.
- Encapsulate behavior inside the state, not the context.
- Keep transitions **explicit and traceable**.
- Combine with **Factory** or **State Machine libraries** for larger apps.

---

## 🔗 Related Patterns

- **Strategy Pattern** – Similar structure, but strategy is interchangeable and stateless.
- **Observer Pattern** – Can notify components of state changes.
- **Command Pattern** – Actions triggered by state transitions.
- **Mediator Pattern** – Useful when states coordinate through a central object.

---

> 💡 The State Pattern helps you avoid messy conditionals and organize logic into focused, self-contained state objects. It's ideal for anything with a "mode" or "phase" that changes behavior.
