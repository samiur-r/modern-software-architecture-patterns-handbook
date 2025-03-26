type Request = { user?: { role: string } };
type Handler = (req: Request) => string;

// ✅ Higher-order function for role-based access
const withAdminGuard = (handler: Handler): Handler => {
  return (req: Request) => {
    if (req.user?.role !== "admin") {
      return "Unauthorized";
    }
    return handler(req);
  };
};

const viewDashboard: Handler = () => "Welcome to Admin Dashboard";

const protectedView = withAdminGuard(viewDashboard);

console.log(protectedView({ user: { role: "admin" } })); // ✅ Welcome
console.log(protectedView({ user: { role: "user" } })); // ❌ Unauthorized
