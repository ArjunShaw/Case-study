import express from "express";
const app = express();

app.use(express.json());

interface User {
  id: number;
  name: string;
}

let users: User[] = [];

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.get("/users/:id", (req, res) => {
  const id = users.find(u => u.id === req.params.id);
  if (!id) {
    return res.status(404).json({ message: "user not found" });
  }
  res.status(200).json(id);
});

app.post("/users", (req, res) => {
  const { name } = req.body;
  const newUser: User = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("server running on port 3000")
})