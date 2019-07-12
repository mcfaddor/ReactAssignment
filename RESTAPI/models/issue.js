const db = require('mongoose');

const issueSchema = db.Schema({

    _id:            db.Schema.Types.ObjectId,
    issuetitle:      { type: String, required: true },
    issuetext:       { type: String, required: true },
    issuestatus:     { type: String, required: true },
    


    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now }
    
});

module.exports = db.model("Issue", issueSchema);
