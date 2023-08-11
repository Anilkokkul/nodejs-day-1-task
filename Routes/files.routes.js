const express = require('express');

const {createFile, getAllFiles} = require("../Controllers/files.controller")

const router = express.Router();

router.post("/createfile", createFile)
 
router.get("/getfiles", getAllFiles);

module.exports = router;
