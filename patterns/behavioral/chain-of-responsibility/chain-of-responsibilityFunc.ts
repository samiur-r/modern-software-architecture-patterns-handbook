type Request = { user?: string; token?: string; isAdmin?: boolean };
type Handler = (req: Request, next: () => void) => void;

const authHandler: Handler = (req, next) => {
  if (!req.token) return console.log("❌ Auth failed.");
  console.log("✅ Authenticated.");
  next();
};

const adminHandler: Handler = (req, next) => {
  if (!req.isAdmin) return console.log("❌ Not an admin.");
  console.log("✅ Admin verified.");
  next();
};

const createChain = (...handlers: Handler[]) => {
  return (req: Request) => {
    const dispatch = (i: number) => {
      if (i < handlers.length) {
        handlers[i](req, () => dispatch(i + 1));
      } else {
        console.log("✅ All checks passed.");
      }
    };
    dispatch(0);
  };
};

// Usage
const handleRequest = createChain(authHandler, adminHandler);

handleRequest({}); // ❌ Auth failed.
handleRequest({ token: "abc" }); // ❌ Not an admin.
handleRequest({ token: "abc", isAdmin: true }); // ✅ Authenticated. ✅ Admin...
