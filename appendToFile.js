const fs = require("fs"); 
try {
  fs.appendFileSync(
    "log.txt",
    `\n New Log Entry: Data appended at  2024-10-23 2:00PM [PID: 1234] [TID: 5678] [TAG: WARNING] [PACKAGE: app.module]`
  );
  console.log("Data appended successfully.");
} catch (error) {
  console.error("error in append To File:- ", error);
}
