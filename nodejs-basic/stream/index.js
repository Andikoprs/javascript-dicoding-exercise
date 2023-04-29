const fs = require("fs");

const readableStream = fs.createReadStream("./input.txt", {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream("output.txt");

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {}
});

readableStream.on("data", (chunk) => {
  writableStream.write(`${chunk}\n`);
});
