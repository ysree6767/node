const express = require('express');

const app = express();


//this will only handle get method API call to /user
// Optional parameter
app.get('/user/:id?', (req, res) => {
 const userId = req.params.id ? req.params.id : 'No ID provided';
 res.send(`User ID: ${userId}`);
});
// Example URLs:
// /user/123 -> User ID: 123
// /user/ -> User ID: No ID provided

// One or more
app.get('/files/:filename+', (req, res) => {
 const filename = req.params.filename;
 res.send(`Filename: ${filename}`);
});

// Example URLs:
// /files/file1 -> Filename: file1
// /files/ -> No match

// Zero or more
app.get('/path/*', (req, res) => {
 const path = req.params[0]; // `*` captures the rest of the path
 res.send(`Path: ${path}`);
});

// Example URLs:
// /path/ -> Path:
// /path/to/resource -> Path: to/resource

// Grouping with regex
app.get('/user/:id(\\d+)', (req, res) => {
 const userId = req.params.id;
 res.send(`User ID: ${userId}`);
});

// Example URLs:
// /user/123 -> User ID: 123
// /user/abc -> No match (because `id` must be digits)


// Named parameter
app.get('/product/:id', (req, res) => {
 const productId = req.params.id;
 res.send(`Product ID: ${productId}`);
});

// Example URLs:
// /product/456 -> Product ID: 456


//this will match all the http method API call to /test
app.use("/test", (req, res) => {
 res.send("Namaste from the server!")
})



app.listen(3000, () => {
 console.log('server is successfully created')
});