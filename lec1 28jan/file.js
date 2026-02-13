console.log("Start JS");

// Synchronous blocking operation
const fs = require('fs');
const data = fs.readFileSync('./test.txt', 'utf8'); // BLOCKS execution
console.log("File read (blocking):", data);

console.log("Third");

// ===== NON-BLOCKING CODE =====
console.log("\n--- Non-Blocking Example ---");

// Asynchronous non-blocking operation
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log("File read (non-blocking):", data);
});

// This executes immediately without waiting
console.log("This prints before file is read");

// ===== CALLBACK EXAMPLE =====
setTimeout(()=>{
    console.log("Second (async callback)");
}, 0); 