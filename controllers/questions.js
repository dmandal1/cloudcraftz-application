const Question = require('../models/Question');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

exports.getQuestions = asyncHandler(async(req,res,next)=>{
    try{
       const question =await Question.find();
       

       if(question.length==0){
         return next(
            new ErrorResponse('Questions does not found.', 404)
          );
       }
       else {
         res.status(200).json({success:true,msg:'all the question has been fetched successfully.',data: question})
       }
    }catch(err){
      new ErrorResponse('Questions does not found.', 404)
 
    }
 
  });

exports.getQuestion = asyncHandler(async(req,res,next)=>{
    try{
       const question =await Question.findById(req.params.id);
       if(!question){
         return next(
            new ErrorResponse(`Question not found with id of ${req.params.id}`, 404)
          );
       }
       else {
         res.status(200).json({success:true, data: question})
       }
    }catch(err){
      new ErrorResponse(`Question not found with id of ${req.params.id}`, 400)
 
    }
 
  });

  exports.createQuestion = asyncHandler(async(req,res,next)=>{
   try{
    let question=await Question.create(req.body);
   //  console.log('backend',question);
    res.status(200).json({
        message:"New question has been created successfully.",
        data:question
    });
   } catch (err) {
      return next(new ErrorResponse('Duplicate questions found',404));
   }
 });

 exports.updateQuestion = asyncHandler(async(req,res,next)=>{
    try{
       const question =await Question.findByIdAndUpdate(req.params.id,req.body);
       return next(new ErrorResponse(`Question has been updated with id of ${req.params.id}`, 200));
    }catch(err){
      return next(new ErrorResponse(`Question does not found with id of ${req.params.id}`, 400))
    }
 
  });

  exports.deleteQuestion = asyncHandler(async(req,res,next)=>{
    try{
       const question =await Question.findByIdAndDelete(req.params.id);
       return next(new ErrorResponse(`Question has been deleted with id of ${req.params.id}`, 200));
    }catch(err){
       return next(new ErrorResponse(`Question does not found with id of ${req.params.id}`, 400))
    }
 
  });