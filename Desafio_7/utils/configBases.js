const optionsMariaDB = {
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
  },
};

const optionsSqlite = {
  client: "sqlite3",
  connection: { filename: "./db/ecommerce.sqlite" },
  useNullAsDefault: true,
};
const fileSystem = {
  path: "./db",
};

module.exports = { optionsMariaDB, optionsSqlite, fileSystem };
