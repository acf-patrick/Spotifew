import { Request, Response } from "express";

const express = require("express");

const app = express();

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  const { name } = req.query;
  res.send(`Hello ${name}!`);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});