const express = require("express")

const path = require("path");
const fileRoutes  = require("./Routes/files.routes")

const app = express();
const port = 5000

app.use(express.json());
app.use(fileRoutes)
//API to create file with current timestamp content and file name

//API to retrive the all text files in the folder

app.listen(port, () => {
   console.log(`server is started on ${port}`)
})