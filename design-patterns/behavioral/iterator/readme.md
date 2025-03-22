# 🔁 Iterator Design Pattern

The **Iterator** pattern provides a way to **access the elements of a collection sequentially** without exposing its internal structure.

It falls under **Behavioral Design Patterns** and is foundational in most programming languages and libraries. It enables traversal of data structures (like arrays, trees, or paginated results) in a clean, consistent, and decoupled way.

---

## 🔍 Real-World Analogy

Think of a **TV remote** or a **book reader**.

You can flip to the next page or change channels without knowing how pages or channels are stored. You just press `next()` or `previous()` — that’s the Iterator pattern at work.

---

## ✅ Common Use Cases

- **Custom data structures** – Linked lists, trees, graphs
- **Streams and generators** – Lazy data consumption
- **Database cursors** – Iterate over query results
- **Paginated APIs** – Loop through pages of results
- **File readers** – Read line by line or chunk by chunk
- **Frameworks** – Angular, React, Lodash, RxJS, Java Collections, Python Iterables

---

## 🧠 Benefits

- **Uniform interface** – Simplifies collection traversal
- **Encapsulates traversal logic** – Consumers don’t need to understand internal structure
- **Supports lazy evaluation** – Only process what's needed
- **Decouples iteration from data structure** – Makes code more flexible and reusable

---

## ⚠️ Drawbacks

- **Overhead** – Extra objects and function calls for simple use cases
- **Custom implementation** – May require boilerplate for complex structures
- **Limited control** – Can be restrictive for non-linear traversal (e.g., skipping multiple elements)

---

## 📌 Best Practices

- Use iterators to **abstract away internal collection logic**.
- Prefer built-in iteration protocols (`for...of`, generators, `[Symbol.iterator]`) where available.
- For large data sets or streams, consider **lazy iteration** using generators or async iterators.

---

## 🔗 Related Patterns

| Pattern            | Relation                                        |
|--------------------|-------------------------------------------------|
| **Composite**       | Often used with tree structures to iterate nodes |
| **Visitor**         | Can be used alongside Iterator for processing  |
| **Generator Functions** | Native syntactic sugar for iterator behavior |

---