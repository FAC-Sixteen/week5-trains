const test = require("tape");
const sortData = require("../scripts/sortData");
const fs = require("fs");

const json = fs.readFileSync(__dirname + "/sortData.json");

const sortedData = sortData.sortData(json);
const time = sortData.timeConverter(384);
const timeDue = sortData.timeConverter(0);
const timeSingle = sortData.timeConverter(60);

const testArrOb = [
  {
    timeToStation: 400,
    lineName: "testLine1",
    destinationName: "testDestination1"
  },
  {
    timeToStation: 586,
    lineName: "testLine2",
    destinationName: "testDestination2"
  },
  {
    timeToStation: 682,
    lineName: "testLine3",
    destinationName: "testDestination3"
  }
];

const mapTrains = sortData.mapTrains(testArrOb);

test("The function sortData should return a JSON object", t => {
  t.equals(typeof sortedData === "object", true, "Should be of type object");
  t.end();
});

test("The function timeConverter should return a String", t => {
  t.equals(typeof time === "string", true, "should be of type string");
  t.equals(time, "6mins", "timeConverter should return 6mins");
  t.equals(timeDue, "due", "timeConverter should return due");
  t.equals(timeSingle, "1min", "timeConverter should return 1min");
  t.end();
});

test("The function mapTrains should return an object", t => {
  t.equals(typeof mapTrains === "object", true, "should be of type object");
  t.end();
});
