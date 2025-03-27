import { createServer, IncomingMessage, ServerResponse } from "http";

type Middleware = (
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void
) => void;

const middlewares: Middleware[] = [];

function use(mw: Middleware) {
  middlewares.push(mw);
}

const server = createServer((req, res) => {
  let i = 0;

  const next = () => {
    if (i < middlewares.length) {
      middlewares[i++](req, res, next);
    }
  };

  next();
});

use((req, res, next) => {
  console.log("Logger");
  next();
});

use((req, res, next) => {
  if (req.url === "/hello") {
    res.end("Hello from middleware!");
  } else {
    next();
  }
});

server.listen(3001, () => console.log("Custom server running"));
