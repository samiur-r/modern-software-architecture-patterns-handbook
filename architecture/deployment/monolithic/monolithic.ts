// monolith.ts

type User = {
  id: string;
  email: string;
  passwordHash: string;
};

type Database = {
  users: User[];
};

// In-memory DB (simulates the persistence layer)
const db: Database = {
  users: [],
};

// Utilities (pure)
const hashPassword = (password: string): string => `hashed-${password}`;

const generateId = (): string => Math.random().toString(36).substring(2, 10);

// Business Logic (pure)
const registerUser = (email: string, password: string) => {
  const userExists = db.users.some((u) => u.email === email);
  if (userExists) return { success: false, message: "Email already exists" };

  const newUser: User = {
    id: generateId(),
    email,
    passwordHash: hashPassword(password),
  };

  db.users.push(newUser);
  return { success: true, user: newUser };
};

const loginUser = (email: string, password: string) => {
  const user = db.users.find((u) => u.email === email);
  if (!user) return { success: false, message: "User not found" };

  const hashed = hashPassword(password);
  if (user.passwordHash !== hashed)
    return { success: false, message: "Incorrect password" };

  return { success: true, message: "Login successful" };
};

// Monolithic Simulation
console.log(registerUser("alice@example.com", "pass123"));
console.log(loginUser("alice@example.com", "pass123"));
