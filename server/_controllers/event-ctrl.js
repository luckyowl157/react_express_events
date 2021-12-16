// const multer = require('multer');
// const upload = multer({dest: '../images'});
var multer  = require('multer');
var fileUpload= require('../middleware/upload-middleware');

const Event = require('../models/Events')

// const type = upload.single('file');


module.exports = {

    

    getEvents: (req, res) => {
        Event
        .find()
        .then(events => {
            if(!events.length) {
                return res
                    .status(404)
                    .json({success: false, error: 'Event not found'})
            }
            return res.status(200).json({success: true, data: events})
        })
    },
    
    createEvent: (req, res, next) => {
        var upload = multer({
            storage: fileUpload.files.storage(), 
            allowedFile:fileUpload.files.allowedFile 
            }).single('file');
upload(req, res, function (err) {
   if (err instanceof multer.MulterError) {
      res.send(err);
   } else if (err) {
      res.send(err);
   }else{
      res.render('upload-form');
   }
   
})
    },
    updateEvent: (req, res) => {
        const id = req.params.id;
        
        Event.findById(id)
            .then(event => {
                event.name = req.body.name
                event.country = req.body.country
                event.city = req.body.city
                event.organizerName = req.body.organizerName
                event.phone = req.body.phone
                event.email = req.body.email
                event.price = req.body.price


                event
                    .save()
                    .then(() => {
                        return res.status(200).json({
                            success: true,
                            id: event._id,
                            message: 'Event updated!'
                        })
                    })
                // if (event.name === event.name) {
                //     console.log('event already exists!')
                //     return res.status(400).json({
                //         success: false,
                //         message: 'Name already exists!'
                //     })
                // } else {
                //     event
                //     .save()
                //     .then(() => {
                //         return res.status(200).json({
                //             success: true,
                //             id: event._id,
                //             message: 'Event updated!'
                //         })
                //     })
                // }
                
            })
    },
   
}




//create event 
// Event.findOne({
        //     name: req.body.name,
        //     country: req.body.country,
        //     city: req.body.city,
        //     organizerName: req.body.organizerName,
        //     phone: req.body.phone,
        //     email: req.body.email,
        //     price: req.body.price,
        //     start: req.body.start,
        //     end: req.body.end,
        //     // file: req.files['file'][0],
        //     currency: req.body.currency

        // }).then(event => {
        //     // if(event) {
        //     //     console.log('already exists!');
        //     //     return res.status(404).json({
        //     //         success: false,
        //     //         error: 'Already exists'
        //     //     })
        //     // }
        // })