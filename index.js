const express = require("express");
var cors = require("cors");
const connectToMongo = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
connectToMongo();

app.use("/api/user", require("./routes/user"));
app.use("/api/company", require("./routes/company"));
app.use("/api/jobs", require("./routes/jobs"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
