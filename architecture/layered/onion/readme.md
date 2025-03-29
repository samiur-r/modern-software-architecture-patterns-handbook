# 🧅 Onion Architecture (Task Manager Example)

**Onion Architecture** is a layered architecture that enforces **separation of concerns** and **dependency inversion**. It structures code into concentric rings, where dependencies always flow inward — from outer infrastructure to core business logic.

This example shows how to implement it using **Node.js**, **TypeScript**, **Prisma**, and **functional programming**.

---

## 🔍 Real-World Analogy

Imagine a **smart thermostat**:

- The **core logic** (inner layer) knows how to manage temperature.
- The **user interface** (mobile app, voice assistant) just sends commands.
- The **hardware** (sensors, heaters) can change without affecting the core.

Onion Architecture ensures the **inner business logic stays stable** while the **outer layers can evolve**.

---

## ✅ Features in This Project

- Create a task  
- Complete a task  
- List all tasks for a user  

Each use case is:
- **Independent of frameworks** like Express
- **Fully testable**
- **Purely functional** using dependency injection

---

## 🧠 Benefits

- **Testable core logic**
- **Framework-agnostic business rules**
- **High separation of concerns**
- **Adaptable to change (swap DB, framework, etc.)**

---

## ⚠️ Drawbacks

- **More boilerplate and folder structure**
- **Steep learning curve**
- **Overkill for simple CRUD apps**

---

## 📁 Project Structure



---

## 🔗 Related Architectural Patterns

- **Clean Architecture** – Very similar, focuses on use cases and independence from frameworks
- **Hexagonal Architecture** – Organizes around ports and adapters
- **CQRS / Event Sourcing** – Often used in the application layer for complex state changes

---

## 🚀 When to Use Onion Architecture

Use Onion Architecture when:
- Building **medium to large applications**
- Your business logic is **non-trivial**
- You need to **swap or mock infrastructure**
- You want to **scale teams or features** independently

Avoid it for:
- **Small scripts** or quick prototypes
- Projects with **limited logic** or simple CRUD needs

---

