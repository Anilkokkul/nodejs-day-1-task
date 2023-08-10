const express = require("express")
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000

app.use(express.json());

//API to create file with current timestamp content and file name
app.post("/createfile", (req, res) => {
   const currentDate = new Date();//for file name and file content
   console.log(currentDate);
   const fileName = `${currentDate.toISOString().replace(/[:.]/g, "-")}.txt` //this will give the file name of date and time
   const fileContent = `Current Timestamp: ${currentDate.getTime()}`;

   fs.writeFile(`Files/${fileName}`, fileContent, (err, text)=> {
      if (err) {
         console.log(err);
         return res.status(500).send("Error while creating f ile");
      }
      console.log('File created Successfully');
      res.status(201).send({
         massage: 'File created Successfully',
         data: text
      })
   })

 })

//API to retrive the all text files in the folder
app.get("/getFiles", (req, res) => {

   fs.readdir('Files', (err, files) => {
      console.log(files)
      if (err) {
         console.log(err);
         return res.status(500).send("Error while retrieving file");
      }
      console.log('Successfully retrieved files');
      res.send({
         data: files
      })
   });

});


app.listen(port, () => {
   console.log(`server is started on ${port}`)
})