# 🏗️ Software Architecture Patterns Overview

This document summarizes foundational **software architecture patterns** organized by categories such as **client structure**, **layered domain logic**, **deployment models**, **communication strategies**, and **simulation-focused systems**.

Each pattern serves different use cases based on **application complexity**, **performance needs**, **team size**, and **business goals**.

---

## 🎨 Client Architecture

These patterns define how **user interface logic** is separated from business and presentation logic, enabling better modularity, testing, and scalability on the client side (web, mobile, desktop).

| Pattern            | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| **MVC**            | Model-View-Controller — separates input logic, business logic, and UI           |
| **MVP**            | Model-View-Presenter — the Presenter handles all UI logic                       |
| **MVVM**           | Model-View-ViewModel — data binding connects the ViewModel and View             |
| **MVVM-C**         | MVVM with Coordinators — adds navigation orchestration (iOS)                    |
| **VIPER**          | View, Interactor, Presenter, Entity, Router — used in iOS for strict separation |
| **Micro-Frontend** | Breaks UI into independently deployed frontend apps/modules                     |

---

## 🧱 Layered Architecture

These architectures structure backend logic into well-defined **layers** or **domains**, promoting **separation of concerns**, **testability**, and **business rule encapsulation**.

| Pattern                        | Description                                                                       |
| ------------------------------ | --------------------------------------------------------------------------------- |
| **Clean Architecture**         | Core business logic is independent from frameworks and infrastructure             |
| **Onion Architecture**         | Similar to Clean; layers wrap around the core domain model                        |
| **Hexagonal Architecture**     | Also called Ports and Adapters — emphasizes external boundary isolation           |
| **DDD (Domain-Driven Design)** | Focuses on modeling complex domains using Aggregates, Entities, and Value Objects |

---

## 🚀 Deployment Models

These define how an application is **structured for deployment** across infrastructure — from unified units to distributed, event-driven systems.

| Model                                   | Description                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| **Monolithic**                          | All code and services live in a single deployable unit                             |
| **Microservices**                       | Independent services for each domain — deployed and scaled separately              |
| **Serverless**                          | Event-driven functions run on demand, with no server management                    |
| **SOA (Service-Oriented Architecture)** | Business-aligned services communicate over enterprise protocols (e.g., SOAP, WSDL) |

---

## 🔄 Communication Patterns

These patterns define **how modules, services, or systems communicate**, synchronize state, and scale — particularly in distributed or microservice systems.

| Pattern                             | Description                                                                              |
| ----------------------------------- | ---------------------------------------------------------------------------------------- |
| **CQRS**                            | Separates command (write) and query (read) models for flexibility and scalability        |
| **Event Sourcing**                  | Stores all state changes as a sequence of events — enabling rehydration and traceability |
| **Event-Driven Architecture (EDA)** | Components communicate through asynchronous events, promoting loose coupling             |

---

## 🤖 Simulation Architecture

This category includes architectures optimized for **high-performance**, **real-time**, and **behavioral simulations**, often used in games, AI, robotics, and physical systems.

| Pattern                           | Description                                                                                                           |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **ECS (Entity-Component-System)** | Separates behavior (systems), data (components), and identity (entities) to enable modular, scalable simulation logic |

---

## ✅ Choosing the Right Architecture

| Context                       | Recommended Approach                     |
| ----------------------------- | ---------------------------------------- |
| UI-heavy applications         | MVC, MVVM, Micro-Frontend                |
| Enterprise or business logic  | Clean Architecture, DDD, Hexagonal       |
| High-scale cloud applications | Microservices, Serverless, Event-Driven  |
| Legacy modernization          | SOA, Monolith → Microservices transition |
| AI, games, real-time systems  | ECS, Event Sourcing                      |

---

> 🧠 Tip: **Architectural patterns are tools — not rules.** Choose based on your team’s needs, your domain complexity, and long-term maintainability goals.
