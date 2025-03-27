# 🧾 Command Design Pattern

The **Command** pattern encapsulates a **request as an object**, allowing you to parameterize clients with queues, logs, or undoable operations.

It falls under **Behavioral Design Patterns** and is widely used to decouple **invokers** from **receivers**, while enabling flexible execution, queuing, and undo/redo functionality.

---

## 🔍 Real-World Analogy

Think of a **restaurant**:

- The **waiter** writes down your order (a command).
- The **chef** reads and executes the command.
- The **order slip** is the command object — containing all details for execution.

The waiter doesn’t need to know how to cook, and the chef doesn’t interact with the customer — the command bridges the gap.

---

## ✅ Common Use Cases

- **Undo/Redo Systems** – Reverse actions by storing command history.
- **Macro Recording** – Combine multiple commands into a batch.
- **UI Buttons / Menus** – Link buttons to reusable command actions.
- **Task Queues / Background Jobs** – Schedule commands for async execution.
- **Remote Controls / Keybinds** – Map inputs to commands.
- **Messaging / Networking** – Serialize actions as command payloads.

---

## 🧠 Benefits

- **Decouples sender and receiver** – The invoker doesn't need to know implementation details.
- **Supports undo/redo** – Maintain history of executed commands.
- **Composable** – Combine commands to form macros or workflows.
- **Reusable logic** – One command can be used in multiple places (UI, CLI, API).

---

## ⚠️ Drawbacks

- **Boilerplate** – Extra interfaces and classes/functions per command.
- **Indirection** – Execution path can be harder to trace in large systems.
- **Overhead** – May be overkill for simple tasks.

---

## 📌 Best Practices

- Keep each command **single-responsibility**.
- Use with an **Invoker** to manage queuing, scheduling, and history.
- Implement **undo/redo** logic when necessary.
- Combine with the **Composite Pattern** to build macro commands.

---

## 🔗 Related Patterns

| Pattern                     | Relation                                                      |
| --------------------------- | ------------------------------------------------------------- |
| **Strategy**                | Encapsulates behavior, but Command includes execution context |
| **Observer**                | Can be triggered by events or notifications                   |
| **State**                   | Commands can trigger state transitions                        |
| **Chain of Responsibility** | Command dispatchers often use chains                          |

---

> 💡 The Command pattern is ideal when you want **decoupled, replayable, undoable, or schedulable actions** in your application.
