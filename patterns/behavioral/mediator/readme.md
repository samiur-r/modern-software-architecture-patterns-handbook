# 🧭 Mediator Design Pattern

The **Mediator** pattern defines an object that encapsulates how a set of objects interact. It promotes **loose coupling** by preventing objects from referring to each other explicitly, and it lets you vary their interaction independently.

It falls under **Behavioral Design Patterns** and is especially useful when you have **many objects communicating in complex ways**.

---

## 🔍 Real-World Analogy

Imagine an **air traffic control system** ✈️. Planes don’t communicate directly with each other. Instead, they talk to the **control tower**, which coordinates their takeoffs and landings. This ensures safe, centralized communication — and that’s what the Mediator pattern does.

---

## ✅ Common Use Cases

- **Chat rooms** – Users send messages through a central mediator.
- **UI components** – Buttons, inputs, and dropdowns coordinate via a controller.
- **Form logic** – One field triggers changes in others (e.g. dynamic inputs).
- **Event-driven architectures** – Centralized dispatchers or orchestrators.
- **Microservice orchestration** – Services interact indirectly through mediators.

---

## 🧠 Benefits

- **Loose coupling** – Components don’t need to know about each other.
- **Centralized control** – All communication logic is in one place.
- **More reusable components** – Each participant can be reused independently.
- **Easier maintenance** – Adding or removing components doesn't require touching others.

---

## ⚠️ Drawbacks

- **Mediator can become complex** – Risk of turning into a “god object.”
- **Hidden interactions** – Logic flow may not be obvious or traceable.
- **Single point of failure** – Everything relies on the mediator’s coordination.

---

## 📌 Best Practices

- Use Mediator when multiple components interact in complex ways.
- Keep your components self-contained and dumb — let the mediator be smart.
- Extract domain-specific mediators for scalability.
- Combine with **Observer** or **Event Emitter** for large-scale systems.

---

## 🔗 Related Patterns

| Pattern       | How It Relates                                       |
| ------------- | ---------------------------------------------------- |
| **Observer**  | Observer is broadcast-based; Mediator is centralized |
| **Command**   | Commands can be routed through a mediator            |
| **Facade**    | Simplifies a system; Mediator controls interactions  |
| **Event Bus** | A common mediator implementation for large systems   |

---

> 💡 Use the Mediator Pattern when **direct communication between components creates too much coupling**, and you want a clean way to manage coordination in one place.
