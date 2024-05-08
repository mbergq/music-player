const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

// Parse JSON bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static("public"));

const musicRoutes = require("./routes/musicRoutes");
// const chrisRoutes = require("./routes/chrisRoutes");

const favoritesRoutes = require("./routes/favoritesRoutes");
// app.use(chrisRoutes);
app.use(musicRoutes);
app.use(favoritesRoutes);

const kajsaRoutes = require("./routes/kajsaRoutes");

app.use(kajsaRoutes);

const connectionMongoDB = require("./config/connectionMongoDB");
connectionMongoDB();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
