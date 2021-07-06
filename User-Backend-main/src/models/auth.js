const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    email:{
      type:String,
      required:true
    },
  
      password:{
          type: String,
          required: true
      },
      role:{
          type: String,
          enum: ['user'],
          default: 'user'
      },
      store:{
        type: String,
        enum: ['Yes','No'],
        default: 'No' 
      },
      contactNumber:{type: String},
      pofilePicture: {type: String},
      following:[{
        type: mongoose.Schema.Types.ObjectId,ref: 'Store'
      }], 
  
  },{timestamps: true});

module.exports = mongoose.model('User',userSchema);



 // loginId: { 
    //   type: String,
    //   trim: true,
    //   required: true,
    //   unique: true,
    // },

    // useraddress: {
    //     type: String,
    //     trim: true,
    //   },
    // userEmail:{
    //       type: String,
    //       trim: true,
    //       lowercase: true
    //   },