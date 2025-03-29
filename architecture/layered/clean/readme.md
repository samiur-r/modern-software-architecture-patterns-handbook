# 🧼 Clean Architecture

**Clean Architecture** is a software design philosophy that separates the core business logic of your application from external concerns like frameworks, databases, or APIs.

It helps you build systems that are **flexible**, **testable**, and **independent of infrastructure**, ensuring that your code remains maintainable as your app grows.

---

## 🔍 Real-World Analogy

Imagine you're building a **restaurant**.

- The **chef** (core logic) doesn’t care where the ingredients come from (database).
- The **waiter** (interface adapter) just passes the customer's order to the chef.
- The **supplier** (frameworks, external services) could change — but the chef keeps cooking the same way.

Clean Architecture ensures that the **chef keeps cooking**, even if the **supplier or waiter changes**.

---

## ✅ Common Use Cases

- **Enterprise applications** — with multiple modules and evolving features.
- **Apps requiring long-term maintainability**.
- **Framework-agnostic systems** — where business rules shouldn't depend on tools like Express, NestJS, or Prisma.
- **Test-driven development** — clean separation makes unit testing much easier.
- **Large teams** — with separate concerns for domain, business logic, and tech stack.

---

## 🧠 Benefits

- **Independent of frameworks** — Swap Express for Fastify without touching business logic.
- **Testable** — Each layer can be tested in isolation.
- **Scalable** — Easy to onboard developers and scale teams or features.
- **UI-agnostic** — Web, mobile, CLI, or API — your use cases remain the same.
- **Stable core** — Business rules don’t change with tech trends.

---

## ⚠️ Drawbacks

- **Steep learning curve** — More structure than typical Node.js apps.
- **Boilerplate-heavy** — Lots of folders, layers, and functions.
- **Overkill for small projects** — Adds complexity where it may not be needed.
- **Requires discipline** — Must enforce separation between layers manually.

---

## 📌 Best Practices

- **Keep dependencies pointing inward** — the core must not know about the outer layers.
- **Use dependency injection** — pass infrastructure methods to your use cases.
- **Avoid direct DB/framework calls** in business logic.
- **Test your use cases** independently from the DB or HTTP layer.
- **Start simple** — scale structure as the app grows.


---

## 🧪 Real Example: Recipe App Use Cases

- `searchRecipes(query)` – Retrieves recipes matching a keyword.
- `addFavorite(userId, recipe)` – Adds a recipe to user's favorites.
- `getFavorites(userId)` – Returns the user's saved favorite recipes.

Each use case:
- Takes **injected dependencies** (e.g., `search`, `saveFavorite`)
- Works **independently of Express or Prisma**
- Is **unit-testable in isolation**

---

## 🔗 Related Patterns

- **Hexagonal Architecture (Ports & Adapters)** – Very similar, focuses on I/O separation.
- **Onion Architecture** – Uses rings instead of layers, but same core idea.
- **Domain-Driven Design (DDD)** – Works well with Clean Architecture for modeling complex domains.
- **CQRS & Event Sourcing** – Often used in the application layer for complex workflows.

---

## 🚀 When to Use Clean Architecture

Use it when:
- You expect the app to grow
- You want to test logic without spinning up servers/DBs
- You’re dealing with multiple interfaces (e.g., Web, Mobile, CLI)

Skip it when:
- You’re building a quick MVP or script
- Your app is a simple CRUD service without much logic

