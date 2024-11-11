const express = require('express')
const app = express()
const port = 4000 // since we use 3000 for mernapp changed to 4000 for backend
const mongoDB = require('./db')
mongoDB();


// create a next middleware for cross origin 
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin" ,process.env.CLIENT_URL || "http://localhost:3000");// use frontend localhost
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With , Content-Type , Accept"
  );
  next();
})


app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));// for login and signup
app.use('/api',require("./Routes/DisplayData"));//for menu display
app.use('/api',require("./Routes/OrderData"));//for order data store in db
app.get('/', (req, res) => {
  res.send('Hello World!')// check localhost:4000 to see hello world
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})