require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("no connection");
})
}

module.exports = connectDB;
