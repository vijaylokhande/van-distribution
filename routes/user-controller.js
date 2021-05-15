const express = require('express');
const router = express.Router();
const userService = require('../service/user.service');
const authorize = require('../_helpers/authorize')
const Role = require('../_helpers/role');
const  user = require('../model/user-model');

// routes
router.post('/authenticate', authenticate);     // public route
router.get('/', authorize(Role.Admin), getAll); // admin only
router.get('/:loginId', authorize([Role.Admin,Role.User]), getById);       // all authenticated users


function authenticate(req, res, next) {
  userService.authenticate(req.body,(user) => user && user.error===undefined ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }));        
}

function getAll(req, res, next) {
  user.getAllUser((results) => { res.status(200).json(results) });
}

function getById(req, res, next) {
    const currentUser = req.user;
    // only allow admins to access other user records
    if (loginId !== currentUser.loginId && currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    user.getUserById(loginId,(results) => {res.status(200).json(results) });
}

module.exports = router;