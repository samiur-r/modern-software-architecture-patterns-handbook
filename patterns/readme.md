# 🧩 Software Patterns

This directory contains a categorized collection of **design patterns**, **client architecture patterns**, **enterprise patterns**, and **cross-cutting concerns**. These patterns serve as reusable solutions to common problems in software design, ranging from low-level code structures to higher-level architectural decisions.

Each subfolder includes:

- A conceptual explanation (`README.md`)
- code examples

---

## 📦 Categories

### 🔨 Creational Patterns

Creational patterns deal with **object creation logic**, making the system independent of how objects are instantiated.

- `singleton/`
- `factory/`
- `abstract-factory/`
- `builder/`
- `prototype/`

---

### 🧱 Structural Patterns

Structural patterns focus on **composing classes or objects** into larger structures while keeping them flexible and efficient.

- `adapter/`
- `decorator/`
- `facade/`
- `proxy/`
- `composite/`

---

### 🔁 Behavioral Patterns

Behavioral patterns are concerned with **how objects interact and communicate**, defining clear responsibilities among components.

- `observer/`
- `strategy/`
- `state/`
- `command/`
- `chain-of-responsibility/`
- `iterator/`

---

### ⚙️ Concurrency Patterns

Concurrency patterns help design programs that **handle multiple tasks at once**, either through threading or async flows.

- `thread-pool/`
- `actor-model/`
- `futures-promises/`
- `reactor/`

---

### 🧠 Functional Patterns

Functional patterns promote **declarative, stateless, and immutable** design, ideal for modern JavaScript/TypeScript and reactive systems.

- `currying/`
- `immutability/`
- `higher-order-functions/`
- `memoization/`
- `middleware/`

---

### 🏢 Enterprise Patterns

These patterns are widely used in **enterprise applications** and domain-driven systems. They help organize **data access**, **transactions**, and **domain logic**.

#### Data Access

- `repository/`
- `dao/`
- `active-record/`
- `data-mapper/`

#### Transactions

- `unit-of-work/`

#### Domain Logic

- `ddd/`
- `ecs/`

---

### 🎨 Client Architecture Patterns

These patterns define **UI and presentation layer architectures**, often used in mobile and frontend apps.

- `mvc/`
- `mvp/`
- `mvvm/`
- `mvvm-c/`
- `viper/`
- `micro-frontend/`

---

### 📌 Cross-Cutting Concerns

Cross-cutting patterns are relevant across all layers of an application, helping manage common concerns like dependency wiring and modularity.

- `dependency-injection/`

---

## 🚀 Contribution Guide

If you're adding a new pattern:

1. Create a new subfolder under the appropriate category.
2. Include a `README.md` with:
   - Description
   - Real-world analogy
   - Use cases
   - Pros & cons
   - Best practices
3. Code examples (`.ts` or `.js`)

---

## ✨ Summary

This collection is intended to serve as a **reference library for learning, sharing, and implementing patterns** across different layers of modern software development — from individual functions to distributed systems.

> “Patterns are tools, not rules. Choose the right one for the problem at hand.”
