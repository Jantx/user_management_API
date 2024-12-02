import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema({
    email:{type:String, required: true, unique:true},
    password:{type:String, required: true},
    firstName:{type: String, required:true},
    lastName:{type:String,required:true}
});

userSchema.methods.updateEmail = function(newEmail){
    this.email = newEmail;
}

userSchema.methods.updatePassword = function (newPassword){
    this.password = newPassword;
}

userSchema.methods.hashPassword = async function () {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password,salt);
}

userSchema.methods.comparePassword = async function (password) {
    return await bcryptjs.compare(password,this.password);
}

export const User = mongoose.model("User",userSchema);