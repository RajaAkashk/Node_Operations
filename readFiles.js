const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "log.txt");
// console.log("file Path", filePath);

try {
  const data = fs.readFileSync(filePath, "utf-8");
  console.log("data:- ", data);
} catch (error) {
  console.log("error:- ", error);
}
