const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req,res)=>{
    res.json({filename:req.file.filename});
});

app.listen(3000, ()=> console.log("Upload API running"));
