// Request object
type Request = { user?: string; token?: string; isAdmin?: boolean };

// Handler interface
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: Request): void;
}

// Base Handler class
abstract class BaseHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: Request): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    } else {
      console.log("✅ Request passed all checks.");
    }
  }
}

// Concrete Handlers
class AuthHandler extends BaseHandler {
  handle(request: Request): void {
    if (!request.token) {
      console.log("❌ Authentication failed.");
      return;
    }
    console.log("✅ Authenticated.");
    super.handle(request);
  }
}

class RoleHandler extends BaseHandler {
  handle(request: Request): void {
    if (!request.isAdmin) {
      console.log("❌ Admin access required.");
      return;
    }
    console.log("✅ Admin privileges verified.");
    super.handle(request);
  }
}

// Usage
const auth = new AuthHandler();
const role = new RoleHandler();

auth.setNext(role);

auth.handle({ user: "john" }); // ❌ Authentication failed.
auth.handle({ user: "john", token: "abc123" }); // ❌ Admin access required.
auth.handle({ user: "admin", token: "xyz", isAdmin: true }); // ✅ Authenticated. ✅ Admin...
