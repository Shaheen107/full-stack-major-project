const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new Schema ({
    email:{
        type: String, 
        required: true,
    }
    // username and password auto matically define kerda ga hamara P-L_M hama alag se difine kerna ki zarort ni 
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);