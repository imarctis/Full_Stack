//const age = process.argv[3];

[
    "node",
    "file1.js",
    "add",
    "5",
    "6",
]

const pr = process.argv[2];
const value1 = Number(process.argv[3]);
const value2 = Number(process.argv[4]);

if(pr === "add"){
    console.log('"process": ', value1 + value2);
}
if(pr === "multi"){
    console.log('"process": ', value1 * value2);
}

// const[, , add, 5, 6] = process.argv;
// const {} = process