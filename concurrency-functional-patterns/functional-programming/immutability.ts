type User = {
  name: string;
  age: number;
};

const user: User = { name: "Alice", age: 25 };

// ❌ Mutable update (not FP-style)
user.age = 26;

// ✅ Immutable update (FP-style)
const updatedUser: User = { ...user, age: 26 };

console.log(user); // { name: 'Alice', age: 25 }
console.log(updatedUser); // { name: 'Alice', age: 26 }
