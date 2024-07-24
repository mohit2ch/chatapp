import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/authRoutes.js';
import messageRoute from './routes/messageRoutes.js';
import userRoute from './routes/userRoutes.js';
import connectDB from './db.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
dotenv.config();
const PORT = process.env.PORT || 5000;



app.get('/', function(req, res){
    res.send("Hello World!");
})

app.use('/api/auth', authRoute);
app.use('/api/messages', messageRoute)
app.use('/api/users', userRoute)

app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`);
    connectDB();
});