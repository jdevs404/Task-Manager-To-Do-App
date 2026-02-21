import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());

// your routes
app.post("/auth/register", (req, res) => {
  // registration logic
});

app.listen(3000, () => console.log("Server running on port 3000"));
