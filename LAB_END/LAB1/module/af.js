import fs from "fs";
export const af = (fn,fc) => {
  fs.appendFile(fn,fc+'\n', (err) => {
    if (err) {
      console.log("error to append");
    } else {
      console.log("append successfully");
    }
  });
};