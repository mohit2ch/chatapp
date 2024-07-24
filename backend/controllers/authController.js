import User from "../Model/userModel.js";
import generateToken from "../utils/generateToken.js";

const loginUser = async function(req, res){
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user || !user.matchPassword(password)){
            
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            email: user.email
        });
    } catch(e) {
        res.status(400).json({
            error: e,
        })
    }
}

const logoutUser = function(req, res){
    try{
        res.cookie("jwt", "", {
            maxAge: 0, // time in milliseconds
        })
        res.status(200).json({message: "User has successfully logged out"});
    } catch(e){
        res.status(400).json({
            error: e,
        })
    }
}

const registerUser = async function(req, res){
    try{
        const {fullname, username, email, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"});
        }
        const sameUsername = await User.findOne({username});
        const sameEmail = await User.findOne({email});

        if(sameUsername){
            return res.status(400).json({error: "Username already exists"});
        }
        if(sameEmail){
            return res.status(400).json({error: "Email already exists"});
        }
        
        const user = await User.create({
            fullname,
            username,
            email,
            password,
            profilePic: `https://avatar.iran.liara.run/public/${gender}/?username=${username}`,

        });
        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            email: user.email
        });
    } catch(e) {
        res.status(400).json({
            error: e,
        })
    }
}

export {
    loginUser,
    logoutUser,
    registerUser
};