const fs = require("fs");

exports.createFile = (req, res) => {
    const currentDate = new Date();//for file name and file content
    console.log(currentDate);
    const fileName = `${currentDate.toISOString().replace(/[:.]/g,"-")}.txt` //this will give the file name of date and time
    const fileContent = `Current Timestamp: ${currentDate.getTime()}`;
 
    fs.writeFile(`Files/${fileName}`, fileContent, (err, data)=> {
       if (err) {
          console.log(err);
          return res.status(500).send("Error while creating f ile");
       }
       console.log('File created Successfully');
       res.status(201).send({
          massage: 'File created Successfully',
          data: data,
       })
    })
  }

  exports.getAllFiles = (req, res) => {

   fs.readdir('Files', (err, files) => {
      if (err) {
         console.log(err);
         return res.status(500).send("Error while retrieving file");
      }
      console.log('Successfully retrieved files');
      res.send({
         data: files
      })
   });

}