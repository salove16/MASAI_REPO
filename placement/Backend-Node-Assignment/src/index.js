const server = require('./server.js');
const connect = require("./config/db.js");

const PORT = process.env.PORT || 5002;
    server.listen(PORT,async()=>{
        try {
            await connect()
            console.log(`connect to port ${PORT}`)
            
        } catch (error) {
            console.log(error)
        }
    });