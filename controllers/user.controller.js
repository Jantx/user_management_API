import {User} from "../models/user.model.js"
//data methods

// GET
export const getAllUsers = async (req,res) =>{
    try {
        const users = await User.find();
        return res.status(200).send({"message":'Users found',"users":users})
    } catch (error) {
        return res.status(500).send({"message":'Server Error',"error":error.message})
    }
}

export const getUserById = async (req,res) =>{
    try {
        const {unique} = req.params
        const user = await User.findOne({"$or":[
            {email: unique},
            {_id:unique}
        ]})
        return res.status(200).send({"message":'Users found',"users":user})
    } catch (error) {
        return res.status(500).send({"message":'Server Error',"error":error.message})
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
            
            const token = await user.generateToken();
            return res.status(200).send({"message":'Login succesful',"user":user,"token":token})
        }else{
            return res.status(401).send('Incorrect credentials')
        }
        
    } catch (error) {
        return res.status(500).send({"message":'Server Error',"error":error.message})
    }
}



//PUT
export const editUser = async (req,res) =>{
    try {
        const {unique} = req.params;
        const {email,password,firstName,lastName} = req.body;
        const userEdited =  await User({
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName": lastName
        });

        await userEdited.hashPassword();

        const result = await User.findOneAndUpdate(
            {
                "$or": [
                        {email: unique},
                        {_id:unique}
                    ]
                },
                {"$set":{
                    "email":userEdited.email,
                    "password":userEdited.password,
                    "firstName":userEdited.firstName,
                    "lastName":userEdited.lastName
                }},
                {new:true}
            );
        
        if (result){
            return res.status(200).send({"message":'User modified',"user":userEdited})
        }else{
            return res.status(400).send("User could not be modified");
        }

    } catch (error) {
        return res.status(500).send({"message":'Server Error',"error":error.message})
    }
}

// DELETE
export const deleteUser = async (req, res) => {
    try {
        const { unique } = req.params;

        const result = await User.findOneAndDelete(
            {
                "$or": [
                    { email: unique },   
                    { _id: unique } 
                ]
            }
        );

        if (result) {
            return res.status(200).send({ "message": 'User deleted successfully', "user": result });
        } else {
            return res.status(404).send({ "message": 'User not found' });
        }

    } catch (error) {
        return res.status(500).send({ "message": 'Server Error', "error": error.message });
    }
};



