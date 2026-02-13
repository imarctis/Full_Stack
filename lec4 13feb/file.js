const login = () =>{
    return Promise.resolve("Loggin Success")
}
const getUser = () =>{
    return Promise.resolve("User Found")
}
const getUserName = () =>{
    return Promise.resolve("User Name")
}

login().then((err, reponse) => {
    if(err){
        console.log("`err:" , err);
    }
    getUser().then(() => {
        getUserName.then(() => {
            console.log;
        });
    });
});

login
    .then(getUser)
    .then(getUserName)
    .then(console.log)
    .then(getUserName)
    .catch((err) => console.log(err))

Promise.resolve(10)
    .then((x) => {
        return x+10;
    })
    .then((x) => {
        return x+20;
    })
    .then(console.log);

const sample = async () => {
    console.log('"Started":', "Started");
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    console.log('"Ended": ', "Ended");
}