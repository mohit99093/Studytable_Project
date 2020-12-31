const Contact = require('../models/contact')

//contact
exports.postContact = async (req,res)=>{
       const contact = new Contact(req.body)
       try{
          await contact.save()
          res.json({status:201,message:'Upload Successfully'})
       }
       catch(e){          
          res.json({status:401,message:e.message})
       }
}