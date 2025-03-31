# 🧾 Event Sourcing

**Event Sourcing** is a software architecture pattern where **all changes to application state are stored as a sequence of events**. Instead of persisting only the current state, you persist every state change as an immutable, append-only event.

The system's current state is derived by **replaying the full history of events**. This offers powerful benefits in traceability, auditability, and system evolution.

---

## 🔍 Real-World Analogy

Think of a **bank ledger**:

- Your account balance isn’t stored directly — it’s **calculated from transactions** (deposits and withdrawals).
- Each transaction is an **event**, and your balance is the **reconstructed state**.

This is how event sourcing works: the truth is in the events, not in a mutable row in a table.

---

## ✅ Common Use Cases

- 💸 Financial systems (banking, trading, crypto)
- 🧾 Audit-compliant systems (e.g., insurance, healthcare)
- 🛒 E-commerce order processing (immutable flows)
- 📜 Systems needing traceability or replay capabilities
- ⚙️ Event-driven microservices and CQRS systems

---

## 🧠 Benefits

- 🕵️ **Full history of all changes** — perfect for audits and debugging
- 🔁 **Rebuild any past or current state** by replaying events
- ✅ **Immutable and append-only** — simplifies consistency and reliability
- 🧩 **Integrates well with CQRS and event-driven systems**
- 📊 **Multiple projections** — read models tailored for different needs

---

## ⚠️ Drawbacks

- 🔍 **Harder to query** — current state must be projected or rebuilt
- 🔄 **Requires projections** — adds complexity for querying
- 🧪 **Event versioning** — evolving schemas over time is tricky
- 📦 **Storage growth** — events can grow indefinitely without retention strategies

---

## 📌 Best Practices

- Define events clearly and version them carefully
- Store events in an **append-only, immutable event store**
- Build **projections** (read models) to enable efficient querying
- Use **snapshots** to optimize performance for long event histories
- Treat event publishing and storing as a **single unit of consistency** (atomic)

---

## 🔗 Related Patterns

- **CQRS** — Separates command (write) and query (read) models; event sourcing is often used on the write side
- **Event-Driven Architecture** — Event sourcing naturally supports async workflows
- **Audit Logging** — Event store = audit log by default
- **Domain-Driven Design (DDD)** — Aggregates and domain events are a perfect fit
- **Temporal Modeling** — Ideal when "what happened" matters more than "what is"

---

> Use **Event Sourcing** when your system needs **high accountability, detailed traceability, or a robust historical record**. It's a powerful approach for **complex domains, mission-critical systems**, or anything that benefits from "replayable history" and **state rehydration**.
