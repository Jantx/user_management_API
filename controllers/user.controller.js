import {User} from "../models/user.model.js"

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

// login methods
export const  registerUser = async (req,res) =>{
    try {
        const {email, password, firstName, lastName} = req.body;
        const newUser =  await User({
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName": lastName
        });
    
        await newUser.hashPassword();
        const savedUser = await newUser.save();    
        return res.status(201).send({"message":'Registered User',"user":savedUser})
    
    } catch (error) {
        return res.status(500).send({"message":'Server Error',"error":error.message})
    }
}

export const loginUser = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});

        if (!user) {
            return res.status(404).send("Cannot find user");
        }

        const isCorrect = await user.comparePassword(password);

        if (isCorrect) {
            return res.status(200).send({"message":'Login succesful',"user":user})
        }else{
            return res.status(401).send('Incorrect credentials')
        }
        
    } catch (error) {
        return res.status(500).send({"message":'Server Error',"error":error.message})
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



