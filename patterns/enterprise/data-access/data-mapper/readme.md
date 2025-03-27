# 🧭 Data Mapper Design Pattern

The **Data Mapper** pattern provides a clean separation between **domain logic** and **data persistence**. It maps objects in your domain model to rows in a database without the objects knowing anything about the database.

It falls under **Architectural Patterns** and is commonly used in complex applications that follow **Domain-Driven Design (DDD)** or require **high testability and decoupling**.

---

## 🔍 Real-World Analogy

Imagine a **translator** (Data Mapper) who sits between a business expert (Domain Object) and a software engineer (Database). The translator ensures both parties understand each other without ever letting them talk directly — keeping their responsibilities clearly separated.

---

## ✅ Common Use Cases

- Applications with **complex business logic**
- Projects following **DDD (Domain-Driven Design)**
- Teams prioritizing **testability** and **clean architecture**
- Systems integrating with **multiple data sources**
- Apps requiring **pure domain models** without DB awareness

---

## 🧠 Benefits

- **Pure, decoupled domain models**
- **SRP (Single Responsibility Principle)** — data logic and business logic are separated
- **Improved testability** — you can test domain logic independently of DB
- **Cleaner, layered architecture**
- **Flexible and maintainable** — easy to change data source or persistence strategy

---

## ⚠️ Drawbacks

- **More boilerplate** — requires writing mappers for each entity
- **Slower initial development**
- **Requires discipline** — layering must be followed strictly
- **Learning curve** — especially for developers used to Active Record or tightly coupled models

---

## 📌 Best Practices

- Keep domain entities **free of any DB/ORM references**
- Put all mapping logic in **dedicated Mapper functions or classes**
- Use with a **Repository layer** to abstract collections and aggregates
- Keep mappers in the **infrastructure or persistence layer**
- Favor **immutability and statelessness** (especially in functional style)

---

## 🔗 Related Patterns

- **Active Record** – Combines persistence and domain logic (opposite of Data Mapper)
- **Repository Pattern** – Often built on top of Data Mapper for aggregate access
- **DAO Pattern** – Focuses more on direct database access with simple CRUD logic
- **Service Layer** – Orchestrates business logic and uses repositories for data access

---

> Use the Data Mapper pattern when you want **clean, testable, and scalable domain code** that doesn’t depend on your database structure. It’s ideal for long-lived, evolving systems with complex domain rules.
