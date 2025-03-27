# 🗂️ DAO (Data Access Object) Design Pattern

The **DAO (Data Access Object)** pattern provides a **structured abstraction** for **interacting directly with a data source** (e.g., database, file, API). It encapsulates all the **CRUD operations** and allows the rest of the application to stay independent from the data access implementation.

It falls under **Structural Patterns** and is commonly used in applications that require clean separation between low-level data operations and higher-level business logic.

---

## 🔍 Real-World Analogy

Think of a **librarian** (DAO) who manages all book operations — adding new books, removing old ones, finding a book by ID. The librarian directly interacts with the **book storage system** (database), so others don't have to.

---

## ✅ Common Use Cases

- **Database CRUD operations** — Insert, update, delete, query
- **Direct ORM abstraction** — Wrapping Prisma, TypeORM, Sequelize, etc.
- **Simplified Testing** — Easier to stub out database operations
- **Multiple Entities** — Each entity (e.g., User, Product) has its own DAO
- **Integration with Repositories or Services** — DAO serves as the data layer

---

## 🧠 Benefits

- **Encapsulates raw data access logic**
- **Keeps services and repositories clean**
- **Centralized data operations** — Easier to maintain and update
- **Reusable logic** — Query logic can be reused across the app
- **Promotes SRP (Single Responsibility Principle)**

---

## ⚠️ Drawbacks

- **Low-level abstraction only** — Not ideal for combining domain logic
- **May duplicate ORM functionality** — Especially with rich ORM APIs
- **Not domain-aware** — DAO deals with data structures, not business rules
- **Limited composition** — Doesn’t aggregate or transform data

---

## 📌 Best Practices

- Use DAO to **abstract direct DB/ORM interaction**
- Keep each DAO focused on **one entity**
- Return **plain data structures** or ORM types
- Avoid leaking business logic into the DAO layer
- Use **interfaces or classes** for consistency and testability

---

## 🔗 Related Patterns

- **Repository Pattern** – Sits on top of DAOs to implement domain logic
- **Service Layer** – Uses DAOs or Repositories to perform business operations
- **Factory Pattern** – Can be used to construct DAOs per context
- **Active Record Pattern** – Often confused with DAO, but tightly couples data and behavior

---

> Use the DAO Pattern when you want a **simple, consistent, and reusable** abstraction over low-level data operations. It keeps your code clean, focused, and easy to maintain.
