const { Router } = require('express');
const express = require('express');
const router =express.Router();

const {getUsers,getUser,createUser,updateUser,deleteUser} = require('../controllers/users');

// routers for questions

router 
.route('/')
.get(getUsers)
.post(createUser);

router
.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;