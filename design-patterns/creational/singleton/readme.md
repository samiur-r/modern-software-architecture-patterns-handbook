# 🧩 Singleton Design Pattern

The **Singleton** pattern ensures that a class or module has only **one instance** throughout the application and provides a **global point of access** to it.

It falls under **Creational Design Patterns** and is widely used when a single object needs to coordinate actions across a system.

---

## 🔍 Real-World Analogy

Think of a **printer spooler** in an operating system. You don’t want multiple spoolers competing with each other. Instead, a single manager coordinates all print jobs. That’s a Singleton.

---

## ✅ Common Use Cases

- **Logger Service** – One central instance for writing logs.
- **Database Connection** – Prevents creating multiple DB connections.
- **App Configuration Manager** – Share global settings across the app.
- **In-memory Cache** – Maintain consistent data across modules.
- **Third-party SDKs** – Initialize external services (like Firebase) once.

---

## 🧠 Benefits

- **Single shared instance** — Prevents duplication of expensive resources.
- **Global access** — Available from anywhere in the app.
- **Lazy initialization** — Only created when needed.

---

## ⚠️ Drawbacks

- **Hidden dependencies** — Overuse can lead to tightly coupled code.
- **Global state** — Makes unit testing harder.
- **Difficult to mock** — Especially in large codebases.
- **Not thread-safe by default** — Needs careful handling in multithreaded environments (less of a concern in Node.js).

---

## 📌 Best Practices

- Use Singletons **when there's a clear need** for a single instance.
- **Avoid using Singletons as a default** pattern — prefer dependency injection where possible.
- **Inject Singletons** instead of directly referencing them to improve testability and flexibility.

---

## 🔗 Related Patterns

- **Factory Pattern** – Often used alongside Singleton for controlled instantiation.
- **Dependency Injection (DI)** – Preferred for managing shared dependencies in large systems.
