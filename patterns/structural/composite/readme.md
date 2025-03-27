# 🌳 Composite Design Pattern

The **Composite** pattern is a structural design pattern that allows you to **treat individual objects and compositions of objects uniformly**. It’s ideal for representing **hierarchical or tree-like structures** where individual elements and groups of elements share the same interface.

It falls under **Structural Design Patterns** and is widely used to build complex object trees that can be interacted with in a consistent way.

---

## 🔍 Real-World Analogy

Think of a **company organization chart**. A **manager** can have subordinates, and some of those subordinates can be managers too. Whether you're talking to an individual employee or an entire department, you expect them to support the same actions — like reporting work hours or calculating payroll.

That’s what the Composite pattern enables: treating **individuals** and **groups** with the same interface.

---

## ✅ Common Use Cases

- **File systems** – Folders contain files and other folders.
- **UI toolkits** – Containers hold widgets, which may also be containers.
- **Organization charts** – Employees and managers in a hierarchy.
- **Documents** – Sections, paragraphs, sentences, and words.
- **Graphics/Scenes** – Shapes, groups, and nested visual elements.

---

## 🧠 Benefits

- **Uniformity** – Treat individual objects and groups the same way.
- **Recursive structures** – Naturally represents tree-like data.
- **Extensibility** – Add new components or containers easily.
- **Encapsulation** – Each node is self-contained and behaves consistently.

---

## ⚠️ Drawbacks

- **Can become overly generic** – May allow invalid structures if not properly restricted.
- **May hide performance costs** – Especially in large recursive trees.
- **Harder to enforce constraints** – E.g., preventing leaves from containing children.

---

## 📌 Best Practices

- Use Composite when your data has a **tree-like, hierarchical nature**.
- Define a **common interface or type** for all components.
- Ensure your components **validate structure**, if needed.
- Combine with **Visitor** or **Iterator** to traverse or operate on tree elements.

---

## 🔗 Related Patterns

- **Decorator Pattern** – Adds responsibilities; Composite structures them.
- **Iterator Pattern** – Used to traverse composites.
- **Flyweight Pattern** – Useful when many components share state in a composite tree.
- **Chain of Responsibility** – Similar tree-like traversal, but for request handling.
