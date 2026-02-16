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

const sample = async () => {
    try {
        console.log('"Started":', "Started");

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json();
        console.log(json);

        console.log('"Ended": ', "Ended");
    } catch (error) {
        console.log("Error:", error);
    }
};

console.log('"Started": ', "Started ------------------- 1");
sample();
console.log('"Started": ', "Started ------------------- 2");
