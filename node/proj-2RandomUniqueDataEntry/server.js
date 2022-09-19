const {
  datasource,
} = require("/home/tector/Documents/project_practices/proj-2RandomUniqueDataEntry/database.js");

const express = require("express");
const app = express();

require("dotenv").config();

const router = require("/home/tector/Documents/project_practices/proj-2RandomUniqueDataEntry/src/router/router.js");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function run() {
  app.use("/", router);
  await datasource.initialize();
  console.log(`datasource initialized`);

  app.listen(process.env.port, () => {
    console.log(`server starting at port ${process.env.port}`);
  });
}

run();
