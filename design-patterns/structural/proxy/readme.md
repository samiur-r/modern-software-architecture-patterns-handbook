# 🛡️ Proxy Design Pattern

The **Proxy** pattern provides a **surrogate or placeholder** for another object to **control access**, enhance behavior, or defer costly operations. It implements the same interface as the real object and acts as a gatekeeper or wrapper around it.

It falls under **Structural Design Patterns** and is widely used when access control, caching, logging, or lazy loading is required.

---

## 🔍 Real-World Analogy

Think of a **celebrity’s manager**. Instead of fans directly contacting the celebrity, they go through the manager. The manager filters requests, handles scheduling, and may deny or approve access — all without the fan ever contacting the celebrity directly.

That manager is the **proxy**. From the fan's point of view, they are interacting with the celebrity, but in reality, they are dealing with a controlled interface.

---

## ✅ Common Use Cases

- **Access Control Proxy** – Restrict access based on user roles or permissions.
- **Virtual Proxy (Lazy Loading)** – Delay creation of expensive objects until needed.
- **Caching Proxy** – Store and return cached results to avoid expensive recalculations.
- **Remote Proxy** – Represent an object in a different location or system (e.g., RPC, APIs).
- **Logging / Monitoring Proxy** – Wrap an object to track or log usage without changing its core logic.

---

## 🧠 Benefits

- **Encapsulates access logic** — Keep your core object clean.
- **Supports lazy loading and optimization** — Create objects only when needed.
- **Improves security and control** — Validate user roles or input before delegating.
- **Centralized enhancements** — Add logging, caching, or validation without modifying the real object.

---

## ⚠️ Drawbacks

- **Added complexity** — More interfaces and classes to maintain.
- **Performance overhead** — May slow things down if poorly implemented.
- **Potential confusion** — Multiple layers can complicate debugging or tracing.

---

## 📌 Best Practices

- Use Proxy when you want to **control or wrap access** to another object.
- Keep the proxy’s interface **identical** to the real object.
- Keep your proxy class **focused** on one responsibility (e.g., logging, caching, auth).
- Combine with **Factory or Dependency Injection** to seamlessly swap real and proxy objects.

---

## 🔗 Related Patterns

- **Decorator Pattern** – Adds responsibilities like Proxy, but focuses on behavior enrichment.
- **Adapter Pattern** – Converts one interface into another; Proxy keeps the same interface.
- **Facade Pattern** – Simplifies a complex system; Proxy controls access to a single object.
- **Mediator Pattern** – Coordinates multiple objects; Proxy guards or manages one.
