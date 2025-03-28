import fs from "fs";
export const rf = (fn) => {
  fs.readFile(fn,"utf-8", (err,data) => {
    if (err) {
      console.log("error to read");
    } else {
      console.log("read successfully:,",data);
    }
  });
};