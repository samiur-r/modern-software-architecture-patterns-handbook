# 🛑 Hexagonal Architecture (Ports & Adapters)

**Hexagonal Architecture**, also known as **Ports and Adapters**, is a software design pattern that structures the application to isolate the **core business logic** from the external world.

It allows your application to be driven equally by users, automated tests, UI, or other systems — all via defined **ports**. These external agents communicate through **adapters**, making the system **flexible**, **testable**, and **independent of infrastructure**.

---

## 🔍 Real-World Analogy

Think of a **power outlet** (port) that allows any kind of device (adapter) to plug in — whether it’s a charger, lamp, or coffee machine.

The outlet doesn’t care *what* is plugged in. It only ensures the **standard interface** is followed.

Likewise, in Hexagonal Architecture:
- Your **application core** exposes standard interfaces (ports)
- External services (like databases or web controllers) **adapt** to those interfaces

---

## ✅ Common Use Cases

- Applications that need to be **easily testable** without external systems
- Systems that need to support **multiple interfaces** (e.g., REST API, CLI, WebSocket)
- Projects that may switch infrastructure (e.g., move from MongoDB to PostgreSQL)
- Applications built with **TDD**, where logic should be tested in isolation

---

## 🧠 Benefits

- **Framework and tool independence** — Easily swap Express, Prisma, or any other tech
- **Decoupled core** — Domain and application logic live independently from adapters
- **Highly testable** — Core logic is tested without touching external systems
- **Supports multiple inputs/outputs** — REST, CLI, events, queues, etc.
- **Improved maintainability** — Clear, enforceable boundaries

---

## ⚠️ Drawbacks

- Adds **architectural overhead** and more files/folders
- Requires **discipline and conventions** to enforce boundaries
- Can be **overkill** for small or straightforward apps
- Slight **learning curve** for teams unfamiliar with the pattern

---

## 📁 Project Structure

![Screenshot from 2025-03-29 00-46-59](https://github.com/user-attachments/assets/e9915974-ad8e-4732-9778-850319b89fb2)

---

## 🔗 Related Architectural Patterns

- **Clean Architecture** – Same principle, slightly different layering
- **Onion Architecture** – Uses concentric rings but enforces the same core idea
- **Layered Architecture** – Simpler, but tighter coupling between layers
- **CQRS** – Can be used within the ports and adapters for complex workflows

---

## 🚀 When to Use Hexagonal Architecture

Use it when:
- You expect the application to grow or evolve
- You want to decouple your core logic from infrastructure
- You want to support **multiple interfaces** (REST, CLI, events)
- You care about **unit testing and maintainability**

Avoid it for:
- **Throwaway scripts** or **tiny MVPs**
- Very simple apps with no significant logic
- Cases where architectural clarity adds more **cost than value**

---
