import express from "express";
import { createServer } from 'node:http';

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});