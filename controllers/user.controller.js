
// login methods

//POST
export const registerUser = (req,res) =>{
    try {
        return res.status(201).send('Registered User')
    } catch (error) {
        return res.status(500).send('Server Error')
    }
}

export const loginUser = (req,res) =>{
    try {
        return res.status(200).send('Login succesful')
    } catch (error) {
        return res.status(500).send('Server Error')
    }
}

//data methods

// GET
export const getAllUsers = (req,res) =>{
    try {
        return res.status(200).send('Users found')
    } catch (error) {
        return res.status(500).send('Server Error')
    }
}

export const getUserById = (req,res) =>{
    try {
        return res.status(200).send('User found')
    } catch (error) {
        return res.status(500).send('Server Error')
    }
}

//POST
export const addUser = (req,res) =>{
    try {
        return res.status(201).send('User created')
    } catch (error) {
        return res.status(500).send('Server Error')
    }
}

//PUT
export const editUser = (req,res) =>{
    try {
        return res.status(200).send('User modified')
    } catch (error) {
        return res.status(500).send('Server Error')
    }
}

//DELETE
export const deleteUser = (req,res) =>{
    try {
        return res.status(200).send('User deleted')
    } catch (error) {
        return res.status(500).send('Server Error')
    }
}



