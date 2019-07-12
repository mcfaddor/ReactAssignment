const route = require('express').Router();

const authorization = require('../auth/auth.js');
const issue = require('../controllers/issueController.js');

// unrestricted routes
route.post("/register", issue.createIssue);

// restricted routes
route.get("/all", authorization, issue.getIssues);
route.get("/:id", authorization, issue.getIssueById);
route.delete('/:id', authorization, issue.deleteIssueById)


module.exports = route;