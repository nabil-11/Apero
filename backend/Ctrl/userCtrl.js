const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");
const generator = require('generate-password');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const userCtrl ={
    GetAll : async (req, res) => {
        const users = await prisma.user.findMany()
        res.send({users:users})
    },
    addLivreur : async (req, res) => {

        try {
            const {nom, email, password,tel} = req.body;

            const user = await prisma.user.findUnique({
                where: {email:email}
            })
            if(user) return res.status(400).json({msg: "The email already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password is at least 6 characters long."})

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
          

            const NewUser = await prisma.user.create({
                data: {
                  nom: nom,
                  email: email,
                  tel:tel,
                  password :passwordHash
                },
              })
              res.status(200).json({user:NewUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
      
    },
    login : async (req, res)=>{
        try {
            const {email, password} = req.body;

            const user = await prisma.user.findUnique({
                where: {email: email}
                })
            if(!user) return res.status(200).json({email: "User does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(200).json({password: "Incorrect password."})

          const isUser = {
              nom : user.nom,
              tel:user.tel,
              email:user.email,
              dateCreated : user.createdAt,
              role :user.role
          }
         
const accesstoken =jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
           console.log(isUser)          
return  res.status(200).json({accesstoken,isUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
ForgotPassword : async(req, res)=>{
     const {tel,email} = req.body
     let Fuser  = await  prisma.user.findUnique({
         where: { email: email} 
         
     })
      if (!Fuser) return res.status(400).send({error:" les informations incorrect"}) 
 let Puser = await prisma.user.findUnique({
     where: {tel:tel}
 })
 if (!Puser) return res.status(400).send({error:" les informations incorrect"}) 

         try{
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
    service:"gmail",
      
      auth: {
        user:process.env.user , // generated ethereal user
        pass:process.env.pass, // generated ethereal password
      },
    });
   const NewPassword = generator.generate({
        length: 10,
        numbers: true
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'www.bdh11@gmail.com', // sender address
      to: 'bdh.nabil@gmail.com', // list of receivers
      subject: "nouveau mot de passe ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `new password ${NewPassword }`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
return res.status(200).json({msg:"success"})  
}
  

catch(err){
    console.log(err)
}
} 
}
module.exports = userCtrl