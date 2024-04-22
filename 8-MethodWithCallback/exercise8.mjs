import { writeFile } from "fs";
import { Buffer } from "buffer";

const data = new Uint8Array(Buffer.from("Wallellujah!"));

writeFile("file.txt", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("File saved!");
});
