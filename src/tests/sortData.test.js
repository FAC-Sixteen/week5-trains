const test = require("tape");
const sortData = require("../scripts/sortData")
const fs = require('fs');

const json = fs.readFileSync(__dirname + '/sortData.json');
const sortedData = sortData(json);


test("The function sortData should return a JSON object", t => {
    t.equals(typeof sortedData === "object", true, "Should equal true/should be an");
    t.end();
});