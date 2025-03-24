# 🎯 Design Patterns Cheat Sheet

This guide helps you quickly decide **when to use which design pattern** based on real-world scenarios and problem types.

---

## 🧱 CREATIONAL PATTERNS — _Object creation logic_

| Pattern            | When to Use                                                             | Example                              |
|-------------------|--------------------------------------------------------------------------|--------------------------------------|
| **Singleton**      | Only one instance should exist globally                                  | Config, Logger, DB connection        |
| **Factory**        | Create objects based on conditions                                       | Payment method factory               |
| **Abstract Factory**| Create families of related objects                                       | UI components per theme              |
| **Builder**        | Build complex objects step-by-step                                       | SQL query builder, UI wizard         |
| **Prototype**      | Clone from existing object templates                                     | Game enemies, test data, configs     |

---

## 🏗️ STRUCTURAL PATTERNS — _How components fit together_

| Pattern           | When to Use                                                             | Example                              |
|------------------|--------------------------------------------------------------------------|--------------------------------------|
| **Adapter**       | Incompatible interfaces need to work together                           | Wrap legacy API to match new one     |
| **Decorator**     | Add behavior without changing original code                              | Logging, Caching, Auth middleware    |
| **Facade**        | Provide simplified access to a complex system                           | EmailSenderFacade, ReportGenerator   |
| **Proxy**         | Control access, add caching/lazy loading/security                        | DB access proxy, API gateway         |
| **Composite**     | Treat individual and group items the same                                | Files/folders, menu systems          |

---

## 🧠 BEHAVIORAL PATTERNS — _How components communicate_

| Pattern                    | When to Use                                                             | Example                                   |
|---------------------------|--------------------------------------------------------------------------|------------------------------------------|
| **Observer**               | One change should notify multiple components                            | UI updates, event system, sockets        |
| **Strategy**               | Swap algorithms/behaviors at runtime                                     | Sorting methods, pricing strategy        |
| **State**                  | Object behavior changes based on internal state                         | Traffic light, game level states         |
| **Command**                | Encapsulate actions into objects (trackable, undoable)                  | CLI commands, undo-redo systems          |
| **Chain of Responsibility**| Multiple handlers process a request one by one                          | Auth pipeline, validation chain          |
| **Iterator**               | Traverse elements without exposing structure                             | Tree walker, custom pagination iterator  |

---

## 🔁 Pattern Decision Tree

### 💡 Creation-related
- Need 1 instance only → **Singleton**
- Need flexible object creation → **Factory** / **Abstract Factory**
- Need cloneable objects → **Prototype**
- Need step-by-step construction → **Builder**

### 🧩 Structure-related
- Need to wrap & match incompatible interface → **Adapter**
- Need dynamic feature enhancement → **Decorator**
- Need unified interface over a complex system → **Facade**
- Need access control/caching/lazy-loading → **Proxy**
- Need tree-like object composition → **Composite**

### 🧠 Behavior-related
- Need algorithm flexibility at runtime → **Strategy**
- Need internal state-driven behavior → **State**
- Need event broadcasting → **Observer**
- Need action encapsulation → **Command**
- Need multiple validators/handlers → **Chain of Responsibility**
- Need abstracted traversal logic → **Iterator**

---

## ✅ Pro Tip: Combine Patterns
Many systems use multiple patterns together:
- **Factory + Strategy**: Return behavior objects from factories
- **Command + Composite**: Batch/queue commands with uniform execution
- **Observer + Mediator**: Event system with a central manager
