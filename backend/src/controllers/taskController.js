const db = require("../config/db");

exports.getTasks = async (req, res) => {
  const [tasks] = await db.query(
    "SELECT * FROM tasks WHERE user_id = ?",
    [req.user.id]
  );

  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  await db.query(
    "INSERT INTO tasks (user_id, title, description) VALUES (?, ?, ?)",
    [req.user.id, title, description]
  );

  res.status(201).json({ message: "Task created" });
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await db.query(
    "UPDATE tasks SET title = ?, description = ? WHERE id = ? AND user_id = ?",
    [title, description, id, req.user.id]
  );

  res.json({ message: "Task updated" });
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  await db.query(
    "DELETE FROM tasks WHERE id = ? AND user_id = ?",
    [id, req.user.id]
  );

  res.json({ message: "Task deleted" });
};
