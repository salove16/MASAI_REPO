require('dotenv').config()


const mongoose=require('mongoose');

const connect = async()=>{
    try {
        console.log("connect in db.js")
    return await mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = connect;