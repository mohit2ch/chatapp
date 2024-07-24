import jwt from 'jsonwebtoken';

export default function generateToken(userId, res){
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    res.cookie("jwt", token, {
        maxAge: 30*24*60*60*1000, // time in milliseconds
        httpOnly: true, // prevent XSS atacks 
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    })
    console.log(process.env.NODE_ENV);
}