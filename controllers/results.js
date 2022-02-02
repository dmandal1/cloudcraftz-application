const Result = require('../models/Result');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

exports.getResults = asyncHandler(async(req,res,next)=>{
    try{
       const result =await Result.find();
       if(result.length==0){
         return next(
            new ErrorResponse('Results does not found.', 404)
          );
       }
       res.status(200).json({success:true,msg:'Allresults data has been fetched successfully.',data: result})
    }catch(err){
      new ErrorResponse('Results does not found.', 404)
 
    }
 
  });

  exports.getResult = asyncHandler(async(req,res,next)=>{
    try{
       const result =await Result.findById(req.params.id);

       if(!result){
         return next(
            new ErrorResponse(`Result does not found with id of ${req.params.id}`, 404)
          );
       }
       res.status(200).json({success:true,
         msg: `Result found with id of ${req.params.id}`,
         data: result})
    }catch(err){
      new ErrorResponse(`Result does not found with id of ${req.params.id}`, 400)
    }
 
  });

  exports.createResult = asyncHandler(async(req,res,next)=>{
   try{
      const result =await Result.create(req.body)
      res.status(200).json({success:true,
        msg: 'Result data has been fetched successfully.',
        data: result})
   }catch(err){
      return next(new ErrorResponse('Duplicate result found',404));
   }

 });

 exports.updateResult = asyncHandler(async(req,res,next)=>{
    try{
       const result =await Result.findByIdAndUpdate(req.params.id,req.body);
       if(!result) {
         return next(new ErrorResponse(`Result does not found with id of ${req.params.id}`, 400))
       }
       return next(new ErrorResponse(`Result has been updated with id of ${req.params.id}`, 200));
    }catch(err){
      return next(new ErrorResponse(`Result does not found with id of ${req.params.id}`, 400));
    }
 
  });

  exports.deleteResult = asyncHandler(async(req,res,next)=>{
    try{
       const result =await Result.findByIdAndDelete(req.params.id);

       if(!result) {
         return next(new ErrorResponse(`Result does not found with id of ${req.params.id}`, 400))
       }
       return next(new ErrorResponse(`Result has been deleted with id of ${req.params.id}`, 200));
    }catch(err){
      return next(new ErrorResponse(`Result does not found with id of ${req.params.id}`, 400))
    }
 
  });