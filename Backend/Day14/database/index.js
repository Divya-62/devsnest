const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "lol", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
