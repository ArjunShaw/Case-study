import express, { Request, Response } from "express";
import validator from "./validator";
import ArtInterface from "./ArtInterface";
import { validationResult } from "express-validator";

const app = express();
app.use(express.json());

const port = 3000;

let artStudentDetails: ArtInterface[] = [];

app.post("/portfolio", validator, (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      error: errors.array(),
    });
  }

  const { name, email, artProjects, portfolioLink } = req.body;

  const obj: ArtInterface = {
    name,
    email,
    artProjects,
    portfolioLink,
  };

  artStudentDetails.push(obj);

  res.status(200).send("Student details added successfully");
});

app.get("/portfolio", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: artStudentDetails,
  });
});

app.listen(port, () => {
  console.log("Server started at port 3000");
});
