const express = require("express");
const app = express();
const PORT = 3000;
const indexRoute = require("./routes/todos");


app.use(express.json()); // Middleware to parse JSON bodies
// app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use("/todos", indexRoute); // Use the index route for the root path
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);