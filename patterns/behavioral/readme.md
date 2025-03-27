# 🧠 Behavioral Design Patterns

**Behavioral design patterns** are concerned with **how objects interact**, how responsibilities are **distributed**, and how communication flows within a system. These patterns help define clear and flexible interaction rules between components.

They are especially useful when:

- You want to **decouple senders and receivers**
- You need to **control the flow** of logic or events
- You want to **encapsulate behavior**, workflows, or strategies

---

## 📦 Patterns Included

| Pattern                                                            | Description                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------------------- |
| 🔁 [Iterator](../iterator/readme.md)                               | Access elements of a collection without exposing its structure |
| 🔄 [State](../state/readme.md)                                     | Allow object behavior to change based on internal state        |
| 🧾 [Command](../command/readme.md)                                 | Encapsulate requests as objects to queue, undo, or log         |
| 🔗 [Chain of Responsibility](../chain-of-responsibility/readme.md) | Pass a request through a chain of potential handlers           |
| 👀 [Observer](../observer/readme.md)                               | Notify multiple objects when one changes                       |
| 🧭 [Mediator](../mediator/readme.md)                               | Centralize complex communication between related objects       |
| 🧠 [Strategy](../strategy/readme.md)                               | Choose algorithms or behaviors at runtime                      |

---

## ✅ Common Use Cases

- GUI event handling and command processing
- Game engine states and entity behaviors
- Messaging and event-driven systems
- Undo/redo functionality
- Workflow engines and strategy selection
- Behavioral control in complex UI forms
- Tree or graph traversal and transformation

---

## 🧠 Benefits

- Promote **separation of concerns**
- Improve **reusability and testability** of behaviors
- Enable **clean extensibility** for new behavior
- Reduce **tight coupling** between components
- Make application flow more **explicit and traceable**

---

## ⚠️ Considerations

- Some patterns may **introduce extra abstraction layers**
- Overuse can lead to **architecture complexity**
- It's important to **use the right pattern for the right problem**

---

## 🔗 Related Pattern Categories

- **Creational Patterns** – Focus on object creation (e.g., Factory, Singleton)
- **Structural Patterns** – Focus on object composition (e.g., Adapter, Facade)

---

> 💡 Behavioral patterns help you design **how parts of your system talk to each other**, making your application **more flexible, dynamic, and modular**.
