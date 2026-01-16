import express, { Request, Response } from "express";
import productRouter from "./routes/product";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Product API");
});

app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
