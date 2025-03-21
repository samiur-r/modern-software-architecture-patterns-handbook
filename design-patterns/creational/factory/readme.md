# 🏭 Factory Design Pattern

The **Factory Pattern** is a creational design pattern that provides a way to **create objects without exposing the instantiation logic** to the client. Instead of using `new` directly, a factory method or function decides which class or object to instantiate based on input or context.

It promotes **loose coupling** and supports the **Open/Closed Principle** — making it easy to introduce new types without changing existing code.

---

## 🏪 Real-World Analogy

Imagine a **coffee shop**. You don't go into the kitchen and make your own coffee. You simply tell the barista what you want — latte, espresso, or cappuccino — and they handle the creation process.

The barista (factory) takes your order (input) and returns a ready-to-use product (object), without you needing to know how it was made.

---

## 🧰 Common Use Cases

- **Notification systems**: Choose between Email, SMS, or Push Notification handlers.
- **UI components**: Dynamically create different elements based on user input or configuration.
- **Database drivers**: Select MySQL, MongoDB, or PostgreSQL connections at runtime.
- **Payment gateways**: Use Stripe, Razorpay, or PayPal based on region or user preference.
- **Game engines**: Spawn different enemy or character types based on level or scenario.

---

## ✅ Benefits

- **Encapsulates object creation** logic in one place.
- Makes code **easier to maintain and extend**.
- Promotes **loose coupling** between the client and object classes.
- Enables **polymorphic behavior** through a unified interface.

---

## ⚠️ Drawbacks

- Can lead to a **proliferation of classes** (each product type might need its own class).
- Introduces **indirection**, which can make the code harder to trace and debug.
- If overused, may **increase complexity unnecessarily**.

---

## 💡 Best Practices

- Use the Factory pattern when **object creation logic is complex** or based on runtime decisions.
- Keep factories **small and focused** — each factory should serve a specific purpose.
- Prefer **interfaces or abstract types** for the objects being created to enable flexibility.
- Combine with other patterns like **Strategy** or **Builder** when needed.

---

## 📂 This Folder Contains

- A class-based implementation of the Factory pattern (OOP style).
- A functional programming variant using closures and object maps.
- A test/demo file showing how to create and use different object types.
- Documentation to help understand the pattern and its usage.

---

## 🔗 Related Patterns

- **Abstract Factory** – A factory of factories, used for families of related objects.
- **Builder** – For step-by-step creation of complex objects.
- **Prototype** – For creating new objects by cloning an existing one.
- **Strategy** – Often used with Factory to encapsulate interchangeable behaviors.

