// ----- Promise Example -----

const fetchData = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        console.log('"Data Fetched": ', "Data Fetched");
        resolve("Data fetched successfully!");
    } else {
        console.log('"Data Not Found": ');
        reject("Data not found!");
    }
}).catch((error) => {
    console.log('"Error": ', error);
});


// ----- Basic Promise Functions -----

const login = () => {
    return Promise.resolve("Login Success");
};

const getUser = () => {
    return Promise.resolve("User Found");
};

const getUserName = () => {
    return Promise.resolve("User Name");
};


// ----- Proper Promise Chaining -----

login()
    .then((res) => {
        console.log(res);
        return getUser();
    })
    .then((res) => {
        console.log(res);
        return getUserName();
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));


// ----- Simple Promise Value Chaining -----

Promise.resolve(10)
    .then((x) => x + 10)
    .then((x) => x + 20)
    .then(console.log)
    .catch((err) => console.log(err));


// ----- Async/Await Example -----

// const sample = async () => {
//     try {
//         console.log('"Started":', "Started");

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const json = await response.json();
//         console.log(json);

//         console.log('"Ended": ', "Ended");
//     } catch (error) {
//         console.log("Error:", error);
//     }
// };

const sample = async () => {
    const res1 = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json))

    const res2 = fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((response) => response.json())
    .then((json) => console.log(json))

    const a = await res1;
    const b = await res2;

    console.log(b);
    console.log(a);

    console.log("Sample ~ b:",b);
    console.log("Sample ~ a:",a);
};

console.log('"Started": ', "Started ------------------- 1");
sample();
console.log('"Started": ', "Started ------------------- 2");


// https://www.amazon.in/AMD-ThreadripperTM-5995WX-128-Thread-Processor/dp/B0B5VLPVL5/ref=sr_1_1?crid=1BTFOLTTMXIEN&dib=eyJ2IjoiMSJ9.vhTIOV2xrvJvdFo1onFygfSEzCBk8SCVd_VzdeDuTnCtHb1CFB8cJKZ9CZ5e8p8fsjbfA9AYGasnBYr5kb3M8NlgVdHdbPqzqhR_QLIpA3-DUxcmB4sxpGQRYorXtdMXdcdt2qMI4Ky2V8krCE9SkyaeoN_LWsSCE9ojp1Jbpxbl4yXfVR9su6A6_9rH18qdqworytPsTXjQYGjfoiY8FtOFLrr-ePgnCC4eQJb9ktY.OlzOKW17Ub2eifgOjzYcq8bxu2AS1_NV4dwQiqf6BY8&dib_tag=se&keywords=ryzen+threadripper+pro+9995wx&qid=1771221184&sprefix=ryzen+thred%2Caps%2C355&sr=8-1
// https:// -> Protocol
// www.amazon.in -> Domain Name
// /AMD-ThreadripperTM-5995WX-128-Thread-Processor -> Path
// /dp/B0B5VLPVL5/ref=sr_1_1?cri--------2Caps%2C355&sr=8-1 -> Query Parameters