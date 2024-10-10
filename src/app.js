const express = require('express');

const app = express();


app.get("/getUserData", (req, res, next) => {

 try {

  // logic of db call and get user data
  throw new Error("lksjdflkjsdlfk");

  res.send('user data sent')
  
 } catch (error) {
  res.status(500).send("some error contact support team")
 }



})

app.use("/", (err, req, res, next) => { //handling the error otherwise it will expose where it went wrong
 if(err){
  // log your error
  res.status(500).send("something went wrong")
 }
} )



app.listen(3000, () => {
 console.log('server is successfully created')
});