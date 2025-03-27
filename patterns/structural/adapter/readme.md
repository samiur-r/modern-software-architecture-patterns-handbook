# 🔌 Adapter Design Pattern

The **Adapter** pattern allows objects with **incompatible interfaces** to work together by converting one interface into another that a client expects.

It falls under **Structural Design Patterns** and is widely used when integrating **legacy code**, third-party libraries, or systems that weren’t designed to work together.

---

## 🔍 Real-World Analogy

Imagine you have a **USB-C laptop**, but the projector only accepts **HDMI**. You can’t plug them directly — you need a **USB-C to HDMI adapter**. That adapter doesn’t change your laptop or the projector; it simply makes them compatible.

That’s exactly what the Adapter pattern does — it acts as a bridge between two incompatible interfaces.

---

## ✅ Common Use Cases

- **Legacy Integration** – Wrap outdated APIs so they work with modern code.
- **Third-party SDKs** – Normalize third-party interfaces into your app’s standards.
- **Cross-platform tools** – Connect inconsistent systems under a common interface.
- **Logging Systems** – Standardize log interfaces across custom, console, and cloud loggers.
- **Payment Providers** – Unify PayPal, Stripe, and Razorpay under one `PaymentGateway` interface.

---

## 🧠 Benefits

- **Improves compatibility** — Make unrelated systems communicate seamlessly.
- **Promotes reusability** — Reuse existing code without modification.
- **Decouples components** — Change or swap systems independently.
- **Isolates third-party complexity** — Keeps your core clean and stable.

---

## ⚠️ Drawbacks

- **Extra layer of abstraction** — Slight performance and complexity cost.
- **Overuse can lead to confusion** — Too many adapters can make the system harder to understand.
- **Hides true interface differences** — May lead to misalignment of functionality.

---

## 📌 Best Practices

- Use Adapter when you have existing or third-party code that **can’t be modified**.
- Prefer **composition** over inheritance — wrap objects, don’t extend them.
- Keep adapters **focused and minimal** — just convert the interface, not the behavior.
- Combine with **Dependency Injection** for even more flexibility and testability.

---

## 🔗 Related Patterns

- **Facade Pattern** – Simplifies a complex system; Adapter makes two interfaces compatible.
- **Decorator Pattern** – Adds behavior; Adapter changes interface.
- **Bridge Pattern** – Decouples abstraction and implementation; Adapter connects existing interfaces.
