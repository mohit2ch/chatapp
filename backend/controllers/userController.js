import User from "../Model/userModel.js";

const getUsers = async function(req, res){
    try{
        const loggedInUser = req.user._id;
        const users = await User.find({_id: {$ne: loggedInUser} }).select("-password");

        res.status(200).json(users);
    } catch(e){
        res.status(500).json({error: e.message});
    }
}

export {
    getUsers
}