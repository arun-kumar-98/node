const router = require("express").Router();

const uniqueData = require("/home/tector/Documents/project_practices/proj-2RandomUniqueDataEntry/src/controller/entrydata.js");

router.get("/gettting", uniqueData.numberEntry);

module.exports = router;
