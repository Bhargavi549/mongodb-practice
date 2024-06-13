const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const router = require('./src/routes/routes');
dotenv.config()

app.use(express.json());

const inialization = async ()=>{
    const connect = mongoose.connect(process.env.MONGOOSE_URL)
    connect.then(async ()=>{
        console.log("..........mongoose connected");
        let PORT = process.env.PORT || 3000
        app.listen(PORT, ()=>{
            console.log(`server running on port ${PORT}`)
        });
        app.use(router)
    }).catch( (err)=>{
        console.log(err);
    })
}
inialization()