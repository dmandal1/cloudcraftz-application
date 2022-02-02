const User = require('../models/User');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

exports.getUsers = asyncHandler(async(req,res,next)=>{
    try{
       const user =await User.find();
       if(user.length==0){
         return next(
            new ErrorResponse('Users does not found.', 404)
          );
       }
       res.status(200).json({success:true,msg:'all the users data has been fetched successfully.',data: user})
    }catch(err){
      new ErrorResponse('Users does not found.', 404)
 
    }
 
  });

  exports.getUser = asyncHandler(async(req,res,next)=>{
    try{
       const user =await User.findById(req.params.id);
       if(!user){
         return next(
            new ErrorResponse(`User does not found with id of ${req.params.id}`, 404)
          );
       }
       res.status(200).json({success:true,
         msg: `User found with id of ${req.params.id}`,
         data: user})
    }catch(err){
      new ErrorResponse(`User does not found with id of ${req.params.id}`, 400)
    }
 
  });

  exports.createUser = asyncHandler(async(req,res,next)=>{
     try {
      let user=await User.create(req.body);
      res.json({
          message:" A new user data has been created successfully.",
          data:user
      });
     } catch (error) {
       console.log(error);
      return next(new ErrorResponse('Duplicate user found',404));
     }
 });

 exports.updateUser = asyncHandler(async(req,res,next)=>{
    try{
       const user =await User.findByIdAndUpdate(req.params.id,req.body);
       if(!user) {
         return next(new ErrorResponse(`User does not found with id of ${req.params.id}`, 400))
       }
       return next(new ErrorResponse(`User has been updated with id of ${req.params.id}`, 200));
    }catch(err){
      return next(new ErrorResponse(`User does not found with id of ${req.params.id}`, 400));
    }
 
  });

  exports.deleteUser = asyncHandler(async(req,res,next)=>{
    try{
       const user =await User.findByIdAndDelete(req.params.id);
       if(!user) {
         return next(new ErrorResponse(`User does not found with id of ${req.params.id}`, 400))
       }
       return next(new ErrorResponse(`User has been deleted with id of ${req.params.id}`, 200));
    }catch(err){
      return next(new ErrorResponse(`User does not found with id of ${req.params.id}`, 400))
    }
 
  });