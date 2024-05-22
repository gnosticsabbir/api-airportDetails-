const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const airportDetailsRouter = require('./routes/airportDetails.route')    

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api",airportDetailsRouter);

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html");
})

app.use((req,res,next)=>{
    res.status(404).json({
        message : "route not found",
    })
})
app.use((err, req, res, next)=>{
    res.status(500).json({
        message : "something broke",
    })
})



module.exports = app;