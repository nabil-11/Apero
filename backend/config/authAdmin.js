const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const authAdmin = async (req, res, next) =>{
    try {
        
        const user =  prisma.user.findUnique({
            where: {
                id:req.user.id ,
                role :"ADMIN"
            }
        })
        if(!user)return res.status(400).json({msg: "Admin resources access denied"})

        next()
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
    module.exports = authAdmin