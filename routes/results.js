const { Router } = require('express');
const express = require('express');
const router =express.Router();

const {getResults, getResult,createResult,updateResult,deleteResult} = require('../controllers/results');

router
.route('/')
.get(getResults)
.post(createResult);

router
.route('/:id')
.get(getResult)
.put(updateResult)
.delete(deleteResult);

module.exports = router;