import jwt from 'jsonwebtoken';
import SignUp from '../models/SingUpModel.js';
import AppError from '../utils/AppError.js';

export const signupUser = async (req, res) => {
    const signup = new SignUp({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const token = jwt.sign({id: signup._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    try {
        const inserteduser = await signup.save();

        res.status(201).json({inserteduser, token});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const login = async (req, res, next) => {
    const {email, password} = req.body;
    // check if email and password exist
    if (!email || !password) {
        return next(new AppError('Please provide email and password!', 400));
    }
    // check if user exist annd email && password is correct
    const user = await SignUp.findOne({email}).select('+password');

    if(!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    const token = '';
    res.status(200).json({
        status: 'success',
        token
    });
};
