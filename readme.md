# 🧱 Software Architecture & Design Patterns

A curated collection of **software architecture styles** and **design patterns** used to build scalable, maintainable, and modular software systems.

This repository is a **learning hub and reference** for developers, architects, and engineers who want to deepen their understanding of how large-scale software is structured — from client-side UIs to distributed backend systems and behavioral programming constructs.

---

## 📦 Contents

This repository is divided into two major categories:

---

## 📐 Architecture Styles

### 🔹 Client Architecture

| Pattern            | Description                                               |
| ------------------ | --------------------------------------------------------- |
| **MVC**            | Model-View-Controller                                     |
| **MVP**            | Model-View-Presenter                                      |
| **MVVM**           | Model-View-ViewModel                                      |
| **MVVM-C**         | MVVM + Coordinators (navigation separation)               |
| **VIPER**          | View, Interactor, Presenter, Entity, Router (used in iOS) |
| **Micro-Frontend** | Independently deployable frontend modules                 |

### 🔹 Layered Architecture

| Pattern                        | Description                                    |
| ------------------------------ | ---------------------------------------------- |
| **Clean Architecture**         | Core domain logic isolated from infrastructure |
| **Onion Architecture**         | Layers built around domain models              |
| **Hexagonal Architecture**     | Ports and Adapters model for flexible I/O      |
| **DDD (Domain-Driven Design)** | Model-driven design for complex business logic |

### 🔹 Deployment Models

| Model                                   | Description                                         |
| --------------------------------------- | --------------------------------------------------- |
| **Monolithic**                          | All logic in one deployable unit                    |
| **Microservices**                       | Independently deployable services                   |
| **Serverless**                          | Functions triggered by events, no infra management  |
| **SOA (Service-Oriented Architecture)** | Interoperable, contract-based service communication |

### 🔹 Communication Patterns

| Pattern                       | Description                                          |
| ----------------------------- | ---------------------------------------------------- |
| **CQRS**                      | Separate write (command) and read (query) models     |
| **Event Sourcing**            | Persist all state changes as immutable events        |
| **Event-Driven Architecture** | Services communicate via events (pub/sub or brokers) |

### 🔹 Simulation Architecture

| Pattern                           | Description                                         |
| --------------------------------- | --------------------------------------------------- |
| **ECS (Entity-Component-System)** | Data-oriented design for real-time, dynamic systems |

---

## 🔧 Design Patterns

### 🏗️ Creational

- Singleton
- Factory Method
- Abstract Factory
- Builder
- Prototype

### 🧱 Structural

- Adapter
- Decorator
- Facade
- Proxy
- Composite

### 🔁 Behavioral

- Observer
- Strategy
- State
- Command
- Chain of Responsibility
- Iterator

### ⚙️ Concurrency

- Thread Pool
- Actor Model
- Futures/Promises
- Reactor

### 🧬 Functional

- Currying
- Immutability
- Higher-Order Functions
- Memoization
- Middleware

### 🏢 Enterprise

#### Data Access

- Repository
- DAO (Data Access Object)
- Active Record
- Data Mapper

#### Transaction Management

- Unit of Work

### ♻️ Cross-Cutting

- Dependency Injection

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🧰 Contribute a New Pattern or Example

1. Fork this repository
2. Add your pattern to the appropriate folder
3. Include:
   - A short `readme.md` explaining the pattern
   - A code example (TypeScript preferred)
   - When and why to use it
4. Submit a Pull Request (PR)

### 🧼 Improve Documentation

- Fix typos, clarify descriptions, or add references to real-world examples
- Link to blog posts, case studies, or books that reinforce the pattern

---

## 📚 Recommended Reading

- _Design Patterns: Elements of Reusable Object-Oriented Software_ — GoF
- _Domain-Driven Design_ — Eric Evans
- _Clean Architecture_ — Robert C. Martin
- _The Art of Scalability_ — Abbott & Fisher
- _Building Microservices_ — Sam Newman

---

## 🧭 License

MIT License — free to use, modify, and share. Give credit where it’s due 💙

---

> 🌱 **Learn architecture, not just frameworks. Patterns evolve — principles last.**
