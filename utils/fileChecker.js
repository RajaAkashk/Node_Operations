require("dotenv").config();
const fs = require("fs");
const path = process.env.FILE_PATH;

// import logError
const logError = require("../errorLogger.js");

function checkAndCreateFile(filePath) {
  if (!filePath) {
    console.log("File path is not defined.");
    return;
  }
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      fs.writeFile(filePath, "Sample text.", (writeErr) => {
        // if (writeErr) throw writeErr;
        if (writeErr) {
          logError(`Error creating file ${writeErr}`);
        } else {
          console.log("File is created.");
        }
      });
    } else {
      console.log("File already exists.");
    }
  });
}

checkAndCreateFile(path);
