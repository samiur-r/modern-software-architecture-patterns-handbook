# 🧩 Model–View–ViewModel + Coordinator (MVVM-C) Architecture

**MVVM-C** is an architectural pattern that builds on top of **MVVM** by introducing a **Coordinator** layer to handle **navigation and flow logic**.

While MVVM separates data, UI, and logic, **MVVM-C goes a step further** by ensuring that **ViewModels remain UI-logic focused and do not handle navigation.**

It’s especially useful in imperative UI frameworks like **iOS UIKit**, but its concepts can be adapted to **React**, **Flutter**, or **Angular** when navigation needs to be modular and testable.

---

## 🔍 Real-World Analogy

Imagine a guided museum tour:

- The **Model** is the guidebook (data).
- The **ViewModel** is the narrator — describing what to focus on, handling logic.
- The **View** is the headset/audio player — just plays what it’s told.
- The **Coordinator** is the **tour guide** — they decide where the group goes next.

---

## ✅ Common Use Cases

- **iOS apps (UIKit)** where navigation is imperative
- **Apps with complex flows** (onboarding, checkout, authentication)
- **State-based navigation**, not just route-based
- **Reusable subflows** — like login/signup used in multiple places
- **When ViewModel shouldn't be tightly coupled with navigation**

---

## 🧠 Benefits

- **Separates navigation logic** from UI and state logic
- Keeps **ViewModels clean and testable**
- Promotes **modular, reusable flows**
- **Scales well** with nested or deeply branching flows
- Coordinators can be **mocked or tested independently**

---

## ⚠️ Drawbacks

- **Adds complexity** and boilerplate — especially in simple apps
- **Can feel redundant** in declarative frameworks like React
- Requires extra care to prevent **Coordinator bloat**

---

## 📌 Best Practices

- Let **Coordinators own the flow** — not ViewModels or Views
- **ViewModel** should never trigger navigation directly
- Use **child coordinators** for isolated flows (e.g., LoginCoordinator, CheckoutCoordinator)
- **Keep Coordinators stateless** where possible — orchestrate, don’t store
- In React or Flutter, consider Coordinators only when routing is **state-based or dynamic**

---

## 🔗 Related Patterns

- **MVVM** – Base architecture for state/UI separation
- **MVP** – Presenter handles logic & some navigation (tighter coupling)
- **Clean Architecture** – MVVM-C fits into the outer “presentation” and “navigation” layers
- **VIPER (iOS)** – Similar layered pattern with a formal Router component

---

## 🛠️ Component Overview

| Layer           | Responsibility                              |
| --------------- | ------------------------------------------- |
| **Model**       | Business logic, API calls, data persistence |
| **ViewModel**   | UI state and transformation logic           |
| **View**        | Renders UI, binds to ViewModel              |
| **Coordinator** | Handles navigation between views/pages      |

---

## 🧭 MVVM vs MVVM-C

| Feature             | MVVM               | MVVM-C                     |
| ------------------- | ------------------ | -------------------------- |
| Navigation location | Often in ViewModel | In dedicated Coordinator   |
| Testability         | Good               | Excellent                  |
| Modularity          | Decent             | Very high                  |
| Complexity          | Lower              | Higher                     |
| Use case            | UI state & logic   | UI + flow/navigation logic |

---

## 📘 When to Use MVVM-C

✅ Use MVVM-C when:

- Your app has **complex, custom navigation logic**
- You want to **test ViewModel logic without routing concerns**
- You’re working on a platform where **navigation is imperative**
- You have **multiple subflows or reusable navigation flows**

🚫 Avoid MVVM-C when:

- You’re building a **small or simple app**
- You’re using **declarative routing** (e.g., `react-router`, Flutter Navigator 2.0)

---

## ✨ Summary

MVVM-C enhances MVVM by introducing a **Coordinator** layer that handles **navigation and screen flow**, keeping ViewModels pure and Views focused.

It provides great **testability, modularity, and control over app flow**, but may be overkill for simpler projects.

> "MVVM handles how your app looks and behaves — MVVM-C adds how it flows."
