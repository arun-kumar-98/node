const { DataSource } = require("typeorm");

require("dotenv").config();

const datasource = new DataSource({
  //reading env data

  type: process.env.name,
  host: process.env.host,
  port: process.env.port_ad,
  username: process.env.username,
  password: process.env.password,
  database: process.env.databaseName,
  entities: [
    "/home/tector/Documents/project_practices/proj-2RandomUniqueDataEntry/src/entity/*.js",
  ],
  migrations: ["migrations/*.js"],
  migrationsTableName: "postgres_migrations",
  cli: {
    entitiesDir: [
      "/home/tector/Documents/project_practices/user-role-api/api/entity/*.js",
    ],
  },
  synchronize: true,
});

module.exports = { datasource };
