const MovieModel = require('../Model/Model')

exports.getAllDocs = async(req,res)=>{
       try{
        const Movies = await MovieModel.find()
        res.status(200).json({
            status :"success",
            length:Movies.length,
            data : {
                Movies,
            }
        })
       }catch(err){
        res.status(400).json({
            status :"failed",
            message : err.message
        })
       }
}

exports.getDocById = async(req,res)=>{
    try{
        const Movies = await MovieModel.findById(req.params.id)
        res.status(200).json({
            status :"success",
            data : {
                Movies:Movies
            }
        })
    }catch(err){
        res.status(401).json({
            status :"failed",
            message : err.message
        })
    }
}

exports.CreateDoc = async(req,res)=>{
      try{
        const Movies = MovieModel.create(req.body)
        res.status(201).json({
            status :"success",
            data : {
                Movies:Movies
            }
        })
      }catch(err){
        res.status(401).json({
            status :"failed",
            message : err.message
        })
    }
}

exports.UpdateDoc =async(req,res)=>{
    try{
        const Movies = MovieModel.findByIdAndUpdate(req.params.id , req.body , {new:true , runValidators:true})
        res.status(200).json({
            status :"success",
            data : {
                Movies:Movies
            }
        })
    }catch(err){
        res.status(404).json({
            status :"failed",
            message : err.message
        })
    }
    
}
exports.DeleteDoc =async(req,res)=>{
    try{
        await MovieModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status :"success",
            data : null
        })
    }catch(err){
        res.status(404).json({
            status :"failed",
            message : err.message
        })
    }
    
}