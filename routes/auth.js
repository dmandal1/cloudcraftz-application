const { Router } = require('express');
const express = require('express');
const router =express.Router();

const {register,login,getMe} = require('../controllers/auth');

const { protect , authorize} = require('../middleware/auth');


router
.route('/register')
.post(register)

router
.route('/login')
.post(login)

router
.route('/me')
.get(protect,getMe)


module.exports = router;