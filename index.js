const server = require("./server");

const port = 5000;

server.listen(port, () => {
  console.log(` Server is running on http://localhost:${port} `);
});
