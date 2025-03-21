# 🔨 Creational Design Patterns

**Creational design patterns** focus on how objects are **created**, abstracting the instantiation process to make systems more flexible and reusable. Instead of instantiating objects directly with `new`, creational patterns provide various ways to create objects suited to the situation.

These patterns help manage object creation **when**:

- The creation process is complex or expensive.
- The exact type of object isn't known until runtime.
- You want to decouple the client from the concrete classes it uses.

---

## 📦 Patterns Included

| Pattern                                             | Purpose                                                                       |
| --------------------------------------------------- | ----------------------------------------------------------------------------- |
| 🔁 [Prototype](./prototype/README.md)               | Clone existing objects instead of creating from scratch.                      |
| 🏭 [Factory Method](./factory-method/README.md)     | Let subclasses decide which object to instantiate.                            |
| 🧰 [Abstract Factory](./abstract-factory/README.md) | Create families of related objects without specifying their concrete classes. |
| 🧱 [Builder](./builder/README.md)                   | Step-by-step object construction for complex objects.                         |
| 🧩 [Singleton](./singleton/README.md)               | Ensure a class has only one instance and provide global access.               |

---

## 📌 When to Use Creational Patterns

- You want to **encapsulate the creation logic** of objects.
- You need to ensure **flexibility and decoupling** in object construction.
- You want to **reuse existing objects** instead of re-creating them.
- You’re managing **resource-intensive or shared resources**.

---

## 🧠 Benefits

- Promote **loose coupling** between client code and object creation.
- Enhance **code readability and maintainability**.
- Enable **object reuse**, **lazy instantiation**, and **configuration control**.
- Support **scalability and extensibility** in growing systems.

---

## ⚠️ Considerations

- May add **complexity** through more layers of abstraction.
- Overuse of patterns can lead to **unnecessary indirection**.
- Each pattern has specific **trade-offs** — pick the right tool for the job.

---

## 🔗 Related Design Pattern Categories

- **Structural Patterns** – How classes and objects are composed (e.g., Adapter, Composite).
- **Behavioral Patterns** – How objects interact and communicate (e.g., Observer, Strategy).

---

## 📚 Resources

- [Refactoring.Guru – Creational Patterns](https://refactoring.guru/design-patterns/creational-patterns)
- _Design Patterns: Elements of Reusable Object-Oriented Software_ by the "Gang of Four" (GoF)
- [SourceMaking – Design Patterns](https://sourcemaking.com/design_patterns)

---

> 💡 Use creational patterns to manage **how**, **when**, and **what** objects are created — laying the foundation for a clean and scalable architecture.
