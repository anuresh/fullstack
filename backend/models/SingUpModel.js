import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const SignUp = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter name']
    },
    email:{
        type: String,
        required: [true, 'Please enter email address'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please enter password'],
        select: false
    }
});
SignUp.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    next();
});

SignUp.methods.correctPassword = async function(candidatPassword, userPassword) {
    return await bcrypt.compare(candidatPassword, userPassword);
}

export default mongoose.model('SingUp', SignUp);