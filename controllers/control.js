const Contact = require('../models/contact')

//contact
exports.postContact = async (req,res)=>{
       const contact = new Contact(req.body)
       try{
          await contact.save()
          res.json({status:201,message:'Thank you for taking interest in us. Our Team will have coffee with you soon !!'})
       }
       catch(e){          
          res.json({status:401,message:e.message})
       }
}