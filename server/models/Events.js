const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Event = new Schema(
    {
        // id: {
        //     type: Number
        // },
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
        },
        img: {
            type: String
        }
        // country: {type: String},
        // city: {type: String},
        // organizerName: {type: String},
        // phone: {type: Number},
        // email: {type: String},
        // price: {type: Number},
        // start: {
        //     type: Date, 
        //     default: Date.now,
        //     // required: true
        // },
        // end: {
        //     type: Date,
        //     default: Date.now + 7,
        //     // required: true
        // },
        // currency: {
        //     type: String,
        //     enum: ['euro', 'dollar', 'pound']
        // }
    },
    {timestamps: true}
);


module.exports = mongoose.model('events', Event);

// function updateEvent(name,cb){
//     Event.find({name : name.name}, function (err, docs) {
//         if (docs.length){
//             cb('Name exists already',null);
//         }else{
//             name.save(function(err){
//                 cb(err,user);
//             });
//         }
//     });
// }

// Event.pre('save', function (next) {
//     var self = this;
//     Event.find({name : self.name}, function (err, docs) {
//         if (!docs.length){
//             next();
//         }else{                
//             console.log('user exists: ',self.name);
//             next(new Error("User exists!"));
//         }
//     });
// }) ;

// Event.method("toJSON", function() {
//     const {__v, _id, ...object} = this.toObject();
//     object.id = _id;
//     return object;
// })