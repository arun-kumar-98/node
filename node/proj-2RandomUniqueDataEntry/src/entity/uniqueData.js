const EntitySchema = require("typeorm").EntitySchema;

const uniqueData = new EntitySchema({
  name: "uniqueData",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    randomNumber: {
      type: "int",
    },
  },
});

module.exports = { uniqueData };
