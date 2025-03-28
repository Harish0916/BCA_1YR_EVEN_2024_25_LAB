import fs from "fs";
export const wf = (fn,fc) => {
  fs.writeFile(fn,fc, (err) => {
    if (err) {
      console.log("error to write");
    } else {
      console.log("written successfully");
    }
  });
};