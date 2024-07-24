import Conversation from "../Model/conversationModel.js";
import Message from "../Model/messageModel.js";

const sendMessage = async function(req, res){
    try{
        const {message} = req.body;
        const receiver = req.params.id;
        const sender = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [sender, receiver]}
        });
        if(!conversation) {
            conversation = await Conversation.create({
                participants: [sender, receiver],
            });
        }

        const newMessage = await Message.create({
            sender,
            receiver,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
            await conversation.save();
        }
        
        res.status(201).json(newMessage);

    } catch(e){
        res.status(500).json({error: e});
    }
}

const getMessages = async function(req, res){
    try{
        const {id: userToChatId} = req.params;
        const sender = req.user._id;
        const conversation = await Conversation.findOne({
            participants: {$all: [sender, userToChatId]},
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        res.status(200).json(conversation.messages);
    } catch(e){
        res.status(500).json({error: e});
    }
}

export {
    sendMessage
}