# 🧱 Builder Design Pattern

The **Builder Pattern** is a creational design pattern that allows you to **construct complex objects step-by-step**. It separates the construction logic from the actual object so that the same building process can be used to create different representations or variations.

It’s ideal when dealing with **objects that have many optional parameters**, or where different configurations need to be constructed cleanly and predictably.

---

## 🏗️ Real-World Analogy

Think of building a **custom burger** at a restaurant. You can choose your bun, patty, toppings, and sauce. The same construction process builds a variety of combinations — and the builder handles the complexity for you.

---

## ✅ Common Use Cases

- Configuring **complex objects** like cars, orders, reports, or queries.
- Building **test objects** in unit testing with flexible inputs.
- Composing **HTML, forms, or UI components** with nested structures.
- **Query builders** for databases (like in ORMs).
- Creating **immutable objects** without massive constructors.

---

## 🌟 Benefits

- Builds complex objects **step-by-step** with clear intent.
- Improves **code readability** with fluent APIs.
- Makes construction logic **reusable and isolated**.
- Helps with creating **immutable objects** by removing setters.
- Allows creating **variations** of the same object using different sequences.

---

## ⚠️ Drawbacks

- Can introduce **extra classes** (builder and target object).
- Adds complexity for **simple objects**.
- May need **synchronization** between builder and built object if they evolve.

---

## 💡 Best Practices

- Use when objects have **many configuration options** or complex construction steps.
- Use **method chaining** for clean, fluent interfaces.
- Combine with **Director classes** when the construction process itself is reusable.
- Keep the builder focused — avoid business logic inside it.

---

## 🔗 Related Patterns

- **Factory Pattern** – Chooses what to build; Builder focuses on how to build.
- **Prototype Pattern** – Copies an existing object instead of building one from scratch.
- **Fluent Interface** – Often used alongside Builder for chaining.
- **Director Pattern** – A separate class that controls the construction steps.
