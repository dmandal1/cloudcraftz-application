const { Router } = require('express');
const express = require('express');
const router =express.Router();

const {getQuestions,getQuestion,createQuestion,updateQuestion,deleteQuestion} = require('../controllers/questions');


const { protect, authorize } = require('../middleware/auth');
// routers for questions

router 
.route('/')
.get(getQuestions)
.post(protect,authorize('publisher','admin'),createQuestion);

router
.route('/:id')
.get(getQuestion)
.put(protect,authorize('admin'),updateQuestion)
.delete(protect,authorize('admin'),deleteQuestion);

 module.exports = router;