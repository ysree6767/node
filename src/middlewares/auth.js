


//Handle the Auth middleware for all GET, POST, ...requests

const adminAuth = (req, res, next) => {
 const token = "xyzabclkjdfljsldfj";
 const isAuthorized = token === "xyz"
 console.log('admin auth is checked!!')
 if (!isAuthorized) {
  res.status(401).send("unauthorized")
 } else {
  next();
 }
}

const userAuth = (req, res, next) => {
 const token = "xyzabclkjdfljsldfj";
 const isAuthorized = token === "xyzabclkjdfljsldfj"
 console.log('user auth is checked!!')
 if (!isAuthorized) {
  res.status(401).send("unauthorized")
 } else {
  next();
 }
}


module.exports = { adminAuth, userAuth }