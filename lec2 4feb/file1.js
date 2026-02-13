import fs from "fs";

const filePath = "lec2 4feb/example.txt";
fs.readFile("example.txt", "utf8", (err, content) => {
    console.log(content);
});