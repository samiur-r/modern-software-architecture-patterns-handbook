# 🧩 Client Architecture Patterns

Client architecture patterns help organize how user interfaces (UI), user interactions, and application logic are structured in frontend or mobile applications. Choosing the right pattern improves **testability**, **maintainability**, and **team collaboration**.

This section covers six widely used client architecture patterns:

- **MVC (Model–View–Controller)**
- **MVP (Model–View–Presenter)**
- **MVVM (Model–View–ViewModel)**
- **MVVM-C (MVVM + Coordinator)**
- **VIPER**
- **Micro-Frontends**

---

## 🧱 1. MVC – Model–View–Controller

**MVC** is one of the oldest architectural patterns. It separates the application into three layers:

- **Model** – Business logic and data.
- **View** – The UI (what the user sees).
- **Controller** – Handles user input, coordinates between Model and View.

**Best For**:

- Simple web/mobile apps
- Early-stage projects
- Server-rendered frameworks (e.g., Rails, Laravel)

---

## 🧱 2. MVP – Model–View–Presenter

**MVP** is an evolution of MVC where:

- **View** becomes passive and only renders.
- **Presenter** takes full control of UI logic and talks to the Model.
- **Model** holds business logic.

**Best For**:

- Legacy Android apps (pre-Jetpack Compose)
- UI-heavy apps requiring testable logic
- Desktop UIs (e.g., WinForms)

---

## 🧱 3. MVVM – Model–View–ViewModel

**MVVM** is designed for **reactive UIs**:

- **ViewModel** exposes UI state and handles user interaction logic.
- **View** observes ViewModel state and renders accordingly.
- **Model** stays responsible for business logic/data.

**Best For**:

- Modern web/mobile frameworks (React, Angular, Jetpack Compose)
- Apps with reactive state
- Clean separation of UI and logic

---

## 🧱 4. MVVM-C – MVVM + Coordinator

MVVM-C introduces a **Coordinator** layer to **handle navigation** separately from the ViewModel.

- **Coordinator** manages app flow and transitions.
- Useful when navigation logic becomes complex or shared across screens.

**Best For**:

- iOS apps using UIKit
- Apps with reusable or state-driven navigation flows
- Teams aiming to decouple UI from navigation logic

---

## 🧱 5. VIPER

**VIPER** stands for:

- **View**
- **Interactor**
- **Presenter**
- **Entity**
- **Router**

It enforces strict separation of concerns and modularity. Each module (feature) is self-contained and highly testable.

**Best For**:

- Enterprise-grade mobile apps (especially iOS)
- Teams working on large, long-term apps
- Feature-based code ownership

---

## 🧱 6. Micro-Frontends

Micro-Frontends apply the **microservices philosophy** to frontend apps:

- Each **feature** (e.g., Cart, Product) is its own independently developed and deployed UI application.
- A shell app stitches them together at runtime.

**Best For**:

- Large-scale frontend platforms with multiple teams
- Projects using module federation, Single-SPA, or web components
- Gradual migrations (e.g., Angular → React)

---

## 🔁 Choosing the Right Pattern

| Pattern            | Best For                         | Complexity | Testability |
| ------------------ | -------------------------------- | ---------- | ----------- |
| **MVC**            | Simple apps                      | Low        | Medium      |
| **MVP**            | Legacy UI logic, testable UIs    | Medium     | High        |
| **MVVM**           | Reactive UI frameworks           | Medium     | High        |
| **MVVM-C**         | Navigation-heavy apps (esp. iOS) | High       | High        |
| **VIPER**          | Modular, long-lived mobile apps  | Very High  | Very High   |
| **Micro-Frontend** | Multi-team, enterprise web apps  | Very High  | Varies      |

---

## ✨ Summary

Client architecture patterns guide how to **structure UI applications** in a way that balances **scalability**, **testability**, and **team autonomy**. Use simple patterns to start, and evolve to more advanced ones as your app grows.

> “Choose the lightest architecture that solves the real problems your team faces — no lighter, no heavier.”
