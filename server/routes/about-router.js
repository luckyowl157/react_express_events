const express = require('express');
const multer = require('multer');
const path = require("path");
const router = express.Router();



// const storage = multer.diskStorage({
//   destination: function(req, file, callback) {
//     callback(null, './public/');
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname);
//   }
// });
// const upload = multer({dest: './public/'});
const storage = multer.diskStorage({
    destination: "./public/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("file");
const About = require('../models/About');
router.get('/about/list', (req, res) => {
    About
    .find()
    .then(abouts => {
        return res.status(200).json({success: true, data: abouts})
    })
})

// router.post('/about/create', upload.single('file'), (req, res) => {
router.post('/about/create',  (req, res) => {
    // console.log(`POST request upload avatar ${req.file.originalname}`);
    console.log('req.file', req.file)
    // if (!req.file) {
    //     console.log("No file received");
    //     return res.send({
    //       success: false
    //     });
    
    //   } else {
    //     console.log('file received');
    //     return res.send({
    //       success: true
    //     })
    //   }
    upload(req, res, () => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);//Here you get file.
        const file = new About();
        file.meta_data = req.file;
        file.save().then(()=>{
        res.send({message:"uploaded successfully"})
        })
        /*Now do where ever you want to do*/
     });
    
    // const body = req.body;
    // const media = req.file

    // if(!body) {
    //     return res.status(400).json({
    //         success: false,
    //         error: 'Provide about'
    //     })
    // }
    // const about = new About(body)
    // if(!about) {
    //     return res.status(400).json({success: false, error: err})
    // }

    // about
    //     .save()
    //     .then(() => {
    //         return res.status(201).json({
    //             success: true,
    //             id: about._id,
    //             message: 'Page Created'
    //         })
    //     })
    //     .catch(error => {
    //         return res.status(404).json({
    //             error,
    //             message: 'Page not created'
    //         })
    //     })
})
router.get('/about/edit/:id', (req, res) => {
    
})

module.exports = router;