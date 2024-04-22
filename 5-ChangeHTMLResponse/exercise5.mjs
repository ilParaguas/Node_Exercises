import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("Request received");

  res.statusCode = 200;

  // Specifies response type
  res.setHeader("Content-type", "text/html");

  // Response body
  res.end(
    "<html><body><h1>wallellujah!</h1></body></html>"
  );
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
