const db = require('mongoose');
const Issue = require('../models/issue');

// unrestricted
exports.getIssues = (req, res) => {
    Issue.find().then(data => res.status(200).json(data))
}

exports.getIssueById = (req, res) => {   
    Issue.findOne({ _id: req.params.id }).then(data => res.status(200).json(data))
}

exports.createIssue = (req, res) => {

    const issue = new Customer(
        {
            _id:        new db.Types.ObjectId,
            issuetitle:  req.body.issuetitle,
            issuetext:   req.body.issuetext,
            issuestatus:   req.body.issuestatus
        }
    ) 

    issue.save()
    .then(() => {
        res.status(201).json({
            message: 'Ärendet skapades',
            data: issue
            
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Ärendet kunde inte skapades',
            error: error
        })
    })

}

exports.deleteIssueById = (req, res) => {
    Issue.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).json({
            message: 'Ärendet togs bort från databasen'
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Ärendet togs inte bort från databasen!',
            error: error
        })
    })
}