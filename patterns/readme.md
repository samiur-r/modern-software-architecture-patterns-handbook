# 🎯 Design Patterns Overview

This document summarizes key software **design patterns** across common categories, helping developers identify, understand, and apply reusable solutions to common software challenges.

Patterns are grouped by purpose: how they construct objects, organize structure, encapsulate behavior, handle concurrency, or apply in enterprise and functional contexts.

---

## 🛠️ Creational Patterns

These patterns deal with **object creation mechanisms**, trying to create objects in a manner suitable to the situation.

| Pattern              | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| **Singleton**        | Ensures a class has only one instance with a global access point         |
| **Factory Method**   | Creates objects without specifying the exact class                       |
| **Abstract Factory** | Produces families of related objects without specifying concrete classes |
| **Builder**          | Constructs complex objects step-by-step                                  |
| **Prototype**        | Creates new objects by cloning existing ones                             |

---

## 🧱 Structural Patterns

These patterns are concerned with **object composition** — how objects and classes are structured to form larger systems.

| Pattern       | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| **Adapter**   | Converts one interface into another expected by the client        |
| **Decorator** | Adds responsibilities to an object dynamically                    |
| **Facade**    | Provides a simplified interface to a complex subsystem            |
| **Proxy**     | Acts as a placeholder for another object to control access        |
| **Composite** | Composes objects into tree structures for hierarchical operations |

---

## 🔁 Behavioral Patterns

These define how objects **communicate and behave**, helping manage algorithms, responsibilities, and the flow of control.

| Pattern                     | Description                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| **Observer**                | Allows objects to subscribe and react to changes in another object      |
| **Strategy**                | Encapsulates interchangeable algorithms behind a common interface       |
| **State**                   | Allows an object to change its behavior when its internal state changes |
| **Command**                 | Encapsulates a request as an object                                     |
| **Chain of Responsibility** | Passes a request along a chain of handlers                              |
| **Iterator**                | Provides a way to access elements of a collection sequentially          |

---

## ⚙️ Concurrency Patterns

These patterns help manage **asynchronous or parallel processing**, often in multi-threaded environments.

| Pattern              | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| **Thread Pool**      | Reuses a fixed set of threads for executing tasks                        |
| **Actor Model**      | Models concurrency through message-passing actors (used in Akka, Erlang) |
| **Futures/Promises** | Represents a value that will be available in the future                  |
| **Reactor**          | Demultiplexes and dispatches events (used in async I/O frameworks)       |

---

## 🧬 Functional Patterns

Common in **functional programming**, these patterns focus on **data immutability**, **pure functions**, and **composability**.

| Pattern                    | Description                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------- |
| **Currying**               | Transforms a function with multiple arguments into a series of single-argument functions |
| **Immutability**           | State cannot be changed after it is created                                              |
| **Higher-Order Functions** | Functions that take other functions as arguments or return them                          |
| **Memoization**            | Caches the result of expensive function calls                                            |
| **Middleware**             | Functions layered in a pipeline to process inputs or requests (common in Express, Redux) |

---

## 🏢 Enterprise Patterns

These are used in enterprise software to structure **data access**, **domain logic**, and **transaction management**.

### 📂 Data Access Patterns

| Pattern                      | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| **Repository**               | Mediates between the domain and data mapping layers      |
| **DAO (Data Access Object)** | Abstracts and encapsulates all access to the data source |
| **Active Record**            | Domain objects also handle their own persistence         |
| **Data Mapper**              | Separates domain logic from persistence logic entirely   |

### 🔄 Transaction Management

| Pattern          | Description                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| **Unit of Work** | Tracks changes to objects during a transaction and coordinates the writing of changes as a single unit |

---

## 🔧 Cross-Cutting Concerns

These patterns address **infrastructure-level problems** that affect multiple layers of the system.

| Pattern                  | Description                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| **Dependency Injection** | A technique to inject dependencies instead of hardcoding them — promotes testability and flexibility |

---

## 🧠 Summary

Each design pattern serves a unique purpose in solving architectural and code-level problems. Learning them improves:

- Code maintainability
- System scalability
- Reusability and flexibility
- Separation of concerns

> Use design patterns as **tools, not rules**. Apply them where they fit your use case, and always optimize for clarity, not cleverness.
