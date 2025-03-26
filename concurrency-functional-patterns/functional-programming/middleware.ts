type Request = { url: string; isAuthenticated?: boolean };
type Response = { status: number; body: string };
type Middleware = (req: Request, res: Response, next: () => void) => void;

const logger: Middleware = (req, res, next) => {
  console.log("Request received:", req.url);
  next();
};

const auth: Middleware = (req, res, next) => {
  if (!req.isAuthenticated) {
    res.status = 401;
    res.body = "Unauthorized";
    return;
  }
  next();
};

const finalHandler: Middleware = (req, res) => {
  res.status = 200;
  res.body = `Welcome to ${req.url}`;
};

// Middleware runner
const runMiddleware = (middlewares: Middleware[]) => (req: Request) => {
  const res: Response = { status: 0, body: "" };
  let i = 0;

  const next = () => {
    const mw = middlewares[i++];
    if (mw) mw(req, res, next);
  };

  next();
  return res;
};

const handleRequest = runMiddleware([logger, auth, finalHandler]);

console.log(handleRequest({ url: "/dashboard", isAuthenticated: true }));
console.log(handleRequest({ url: "/dashboard", isAuthenticated: false }));
