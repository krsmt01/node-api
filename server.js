const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 5000;

//when we add css files for ejs which we then store in new folder public
//app.use(express.static(""));

const connectDB = require("./config/db");
connectDB();

// Template engine

app.set("views", path.join(__dirname,"/views"));
app.set("view engine", "ejs");

//Routes

app.use("/api/files", require("./routes/files"));

app.use("/files", require("./routes/show"));

app.use("/files/download", require("./routes/download"));

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})