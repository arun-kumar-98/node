const {
  datasource,
} = require("/home/tector/Documents/project_practices/proj-2RandomUniqueDataEntry/database.js");

const uniqueData = require("/home/tector/Documents/project_practices/proj-2RandomUniqueDataEntry/src/entity/uniqueData.js");

const repo = datasource.getRepository("uniqueData");

const numberEntry = async (req, res) => {
  try {
    const item = generateRandom();
    await repo.save(item);
    // repo.find().then((records) => {
    //   console.log(records);
    // });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { numberEntry };

//generate random number
function generateRandom() {
  return Math.floor(Math.random() * 10 + 1);
}
