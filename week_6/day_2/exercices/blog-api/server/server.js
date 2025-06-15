const express = require('express');
const bodyParser = require("body-parser");
const postRoutes = require('./routes/postRoutes');
const PORT = 5000;


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/posts', postRoutes);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});


