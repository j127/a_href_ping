const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const hbs = require("hbs");
const statsRouter = require("./routes/stats");
const pagesRouter = require("./routes/pages");

const PORT = 4567;

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.static("public"));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// routers
app.use("/stats", statsRouter);
app.use("/", pagesRouter);

app.listen(PORT, () =>
    console.log(`server is running at http://localhost:${PORT}`)
);
