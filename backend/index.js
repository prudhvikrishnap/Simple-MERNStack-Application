const express= require('express')
const app = express();
const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://prudhvi:mernstack@cluster0.yzep4.mongodb.net/mernstack?retryWrites=true&w=majority"
    )

app.listen(3001,()=>{
    console.log("server runs")
})