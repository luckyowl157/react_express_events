const { Router } = require("express");
const Event = require("../models/Events");
// const multer = require('multer');
// const uuid =require('uuidv4');
// const upload = require("../middleware/upload-middleware");
const router = Router();



// EVENT LIST
router.get('/events/list', (req, res) => {
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
})
// EVENT LIST

// EVENT CREATE
router.post('/event/create', (req, res, next) => {
    
        
})
// EVENT CREATE

// EVENT EDIT
router.get('/event/edit/:id', (req, res) => {
    Event.findOne({_id: req.params.id}, (err, event) => {
        if(err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if(!event) {
            return res
                .status(404)
                .json({
                    success: false,
                    error: 'Movie not found'
                })
        }
        return res.status(200).json({success: true, data: event})
    }).clone().catch(function(err){ console.log(err)})

   
})
router.put('/event/edit/:id', (req, res) => {
    const id = req.params.id;

    Event.findById(id)
    .then(event => {
        event.name = req.body.name;

        event
            .save()
            .then(updateEvent => {
                console.log(`${updateEvent.name} updated`);
                return res.status(200).json({
                    success: true,
                    id: event._id,
                    message: 'Event updated!'
                })
            })
    })
})
// EVENT EDIT

// DELETE ROUTES
router.delete('/event/:id', async (req, res) => {
    await Event.findByIdAndDelete({_id: req.params.id}, (err, event) => {
        if(err) {
            return res.status(400).json({success: false, error: err})
        }
        return res.status(200).json({success: true, data: event})
    }).catch(err => console.log(err))
});
router.delete('/events/list/:id', async (req, res) => {
    await Event.findByIdAndDelete({_id: req.params.id}, (err, event) => {
        if(err) {
            return res.status(400).json({success: false, error: err})
        }
        return res.status(200).json({success: true, data: event})
    }).catch(err => console.log(err))
})
// DELETE ROUTES


// router.post('/event/create', EventCtrl.createEvent);
// // router.put('/event/edit/:id', EventCtrl.updateEvent);
// // router.delete('/event/:id', EventCtrl.deleteEvent);
// // router.get('/event/edit/:id', EventCtrl.getEventById);
// router.get('/events/list', EventCtrl.getEvents);
// // router.delete('/events/list/:id', EventCtrl.deleteEventFromList);

module.exports = router;