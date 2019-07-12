const db = require('mongoose');

const customerSchema = db.Schema({

    _id:            db.Schema.Types.ObjectId,
    cfirstname:      { type: String, required: true },
    clastname:       { type: String, required: true },
    ccompany:        { type: String, required: true },
    caddress:        { type: String, required: true },
    czipcode:        { type: String, required: true },
    ccity:          { type: String, required: true },
    ccountry:        { type: String, required: true },

    cemail:        { type: String, required: true },
    cphone:        { type: String, required: true },


    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now }
    
});

module.exports = db.model("Customer", customerSchema);
