const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static("public"));

const recordRoutes = require("./routes/recordRoutes");

app.use(recordRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
