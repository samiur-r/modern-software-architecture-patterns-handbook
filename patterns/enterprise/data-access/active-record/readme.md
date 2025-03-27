# 🗃️ Active Record Design Pattern

The **Active Record** pattern combines **data and behavior** into a single object. Each instance of the model represents a row in a database table and includes methods to **create, read, update, and delete (CRUD)** itself.

---

## 🔍 Real-World Analogy

Think of a **form** that you fill out at the bank. That form isn’t just data — it knows how to **submit itself**, **update itself**, or **delete itself** from the system. The form is both the data and the action.

---

## ✅ Common Use Cases

- **Simple CRUD-based applications**
- **Rapid prototyping and MVPs**
- **Frameworks like Rails, Laravel, Django, or ORMs with rich APIs**
- **Applications where business logic is minimal and resides mostly in models**
- **When you want to keep model-related logic and persistence in one place**

---

## 🧠 Benefits

- **Easy to understand and implement**
- **Fewer layers of abstraction** = faster development
- **Readable, expressive code** (`User.create(...)`, `user.update(...)`)
- **Reduces boilerplate** for common DB operations
- **Great for small teams and small to medium-sized projects**

---

## ⚠️ Drawbacks

- **Tightly couples data and database logic**
- **Violates SRP** – business logic and persistence logic are mixed
- **Harder to test and mock** compared to repositories or services
- **Difficult to scale** as application complexity grows
- **Poor fit for DDD (Domain-Driven Design)**

---

## 📌 Best Practices

- Keep model methods **focused on persistence and validation**
- Avoid putting **complex business logic** in Active Record models
- Use for **simple entities** or in CRUD-heavy applications
- If your model starts handling multiple responsibilities, **refactor to Repository + Service pattern**
- Combine with **Value Objects** or **Service Objects** for added flexibility

---

## 🔗 Related Patterns

- **DAO Pattern** – Separates data access from the model; focuses on lower-level persistence logic
- **Repository Pattern** – Abstracts collections of objects and adds domain logic
- **Service Layer** – Keeps business logic outside the model
- **Data Mapper Pattern** – Maps models to DB separately, allowing more decoupled architectures

---

> Use the Active Record pattern when you want **simple, expressive, and fast development** without the need for extra architectural layers. It shines in CRUD-heavy applications but should be avoided for complex business domains or large codebases.
