import express from "express";
import { createServer } from 'node:http';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.send(join(__dirname, 'index.html'));
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});