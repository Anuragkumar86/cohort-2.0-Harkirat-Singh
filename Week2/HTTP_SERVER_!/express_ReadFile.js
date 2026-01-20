const express = require("express");
const fs = require("fs")
const path = require("path");

const app = express();
const port = 3002

app.get("/file/:filename", (req, res) => {

    // const path = require("path");

    // const baseFolderPath = "C:\\Users\\anura\\Documents\\myfiles"; // Absolute path to the folder
    // const filename = req.params.filename; // Extract filename from URL
    // const filePath = path.join(baseFolderPath, filename);


    const folderPath = path.join(__dirname, "myfiles"); // Path to "my files" directory
    const filename = req.params.filename;
    const filePath = path.join(folderPath, filename);
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).send("Error reading the file.");
            return;
        }
        console.log(filename);

        res.send(data);
    })
})

app.listen(port, () => {
    console.log(`I am listing at port ${port}`)
})
