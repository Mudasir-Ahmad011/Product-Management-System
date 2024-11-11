const express = require('express');
const connecttomongoose = require('./db');
var cors = require('cors')

connecttomongoose();

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json());

app.use("/api/products",require("./routes/products"));
app.use("/api/auth",require("./routes/auth"));

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
})