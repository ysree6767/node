const express = require('express');

const app = express();

app.use("/test", (req, res) => {
 res.send("Namaste from the server!")
})

app.use("/home",(req, res)=>{
 res.send("hello from node")
})

app.listen(3000, () => {
 console.log('server is successfully created')
});