# 🧱 Layered Architectures: Clean vs Onion vs Hexagonal

Modern backend systems often adopt layered architectural patterns to improve **separation of concerns**, **testability**, and **maintainability**. This document provides an overview and comparison of three popular styles:

- **Clean Architecture** 🧼  
- **Onion Architecture** 🧅  
- **Hexagonal Architecture (Ports & Adapters)** 🛑  

Each architecture offers a way to isolate **business logic** from **infrastructure**, but differs in structure, terminology, and emphasis.

---

## 🧼 Clean Architecture

**Clean Architecture** was proposed by Robert C. Martin (Uncle Bob). It places **business logic at the center**, with layers around it for adapters, interfaces, and frameworks.

### ✅ Characteristics
- Domain and use cases are at the core
- Dependency rule: outer layers depend inward
- Framework-agnostic and testable

### 📦 Layers
1. **Entities** – Enterprise business rules
2. **Use Cases** – Application-specific business logic
3. **Interface Adapters** – Controllers, presenters, gateways
4. **Frameworks & Drivers** – Express, Prisma, databases, etc.

### 🎯 When to Use
- Long-term systems with complex rules
- Teams that value testability and clean boundaries

---

## 🧅 Onion Architecture

**Onion Architecture** is conceptually similar to Clean Architecture but visualized as concentric circles (rings) around the domain model.

### ✅ Characteristics
- Entities are at the core
- Application logic wraps the domain
- Infrastructure is outermost
- Focuses on **domain purity**

### 📦 Rings
1. **Domain Model**
2. **Application Services**
3. **Interface Adapters**
4. **Frameworks & Infrastructure**

### 🎯 When to Use
- Domain-driven projects
- Systems requiring clear domain boundaries
- When adapting external systems is common

---

## 🛑 Hexagonal Architecture (Ports & Adapters)

**Hexagonal Architecture** introduces the concept of **Ports** (interfaces) and **Adapters** (implementations) to decouple the core from external systems.

### ✅ Characteristics
- Core app exposes input/output ports (interfaces)
- External agents (UI, DB, APIs) are adapters
- Core is unaware of frameworks
- Very testable and extensible

### 📦 Structure
- **Application Core** – Domain + use cases
- **Ports** – Input (controllers) / Output (repositories)
- **Adapters** – Implement input/output (Express, Prisma, etc.)

### 🎯 When to Use
- Systems with multiple interfaces (REST, CLI, Events)
- Apps requiring high test coverage and loose coupling
- Teams with clear boundaries between logic and infrastructure

---

## 🔁 Side-by-Side Comparison

| Feature                     | Clean Architecture | Onion Architecture | Hexagonal Architecture |
|-----------------------------|--------------------|---------------------|-------------------------|
| Core focus                 | Use Cases           | Domain Model        | Application Logic       |
| Visual metaphor            | Layered circles     | Concentric rings    | Hexagon with ports      |
| Dependency rule            | Out → In            | Out → In            | Outer ↔ Ports ↔ Core     |
| Port/adapter terminology   | No (uses gateways)  | No                  | Yes                     |
| Infra swap friendly        | ✅                  | ✅                  | ✅                      |
| Testability                | ✅ High             | ✅ High             | ✅✅ Very High            |
| Best for                   | Long-lived apps     | Domain-heavy apps   | Interface-rich systems   |

---

## ✅ Conclusion

All three architectures aim to **separate business logic from infrastructure**, but:

- Use **Clean Architecture** when you want a well-known, layered approach with emphasis on **use cases**.
- Choose **Onion Architecture** when **domain purity** and **core modeling** are your focus.
- Go with **Hexagonal Architecture** when your app talks to many systems (CLI, API, DB, events) and you want to plug things in/out easily.
