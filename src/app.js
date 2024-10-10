const express = require('express');

const app = express();
const { adminAuth, userAuth } = require('./middlewares/auth')


//Handle the Auth middleware for all GET, POST, ...requests

app.use("/admin", adminAuth );



app.get("/user", userAuth, (req, res, next) => {
 res.send('user data sent')
})

app.get("/admin/getData", (req, res, next) => {
 res.send('data fetched');
}
)


app.get("/admin/deleteUser", (req, res, next) => {
  res.send('deleted a user');  
 }
)



app.listen(3000, () => {
 console.log('server is successfully created')
});