import asyncHandler from  'express-async-handler'
import User from '../modules/userModule.js';
import generateToken from '../utils/generateToken.js';
// to authenticate a user/set token
//route is POST/api/users/auth
//access is public

const authUser = asyncHandler(async (req, res) => {
const {email, password} = req.body;

const user = await User.findOne({email});
if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            emai:user.email
        })
     } else{
        res.status(401);
        throw new Error ('Invalid email or password')
     } 
});

// to register a user/
//route is POST/api/users
//access is public

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password } = req.body;

// trying to see if the user exists through email
    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400);
        throw new Error ('User already esists')
    }
// creating the user if the user does not exists
    const user = await User.create({
        name,
        email,
        password
    });
     if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            emai:user.email
        })
     } else{
        res.status(400);
        throw new Error ('Invalid user data')
     }
});

// to logout a user
//route is POST/api/users/logout
//access is public

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
res.status(200).json({message: 'User logged out'})
});

// to get a user profile
//route is GET/api/users/profile
//access is private

const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }
res.status(200).json(user)
});

// to update a user profile
//route is PUT/api/users/auth
//access is private

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if(req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = await user.save()
        res.status(200).json({
           _id: updatedUser._id,
           name: updatedUser.name,
           email: updatedUser.email
        })
    }else{
        res.status(404);
        throw new Error('User not found')
    }
});
export{authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};