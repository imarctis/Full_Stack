exports.getAllUsers = (req, res) => {
    // Logic to retrieve all users from the database
    res.json({ message: 'Get all users' });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    const {name, department} = req.query;
    console.log("department: ", department);
    console.log("name: ", name);
    const headers = req.headers; 
    // Logic to retrieve a user by ID from the database
    res.json({ message: `Get user with ID: ${userId}, Name: ${name}, Department: ${department}` });
};