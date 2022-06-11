const { PrismaClient } = require('@prisma/client')
const { query } = require('express')
const prisma = new PrismaClient()

const categoryCtrl ={
    getAll :async(req,res)=>{
        try{
      const category = await prisma.category.findMany({

        include: {
           Produits:true
          },
      })
      console.log(category)
     if(category) return res.status(200).send({category:category})
    }
    catch(err){
        console.log(err)
    }
    },

    addcategory: async  (req,res)=>{
        const imageName = req.file.filename
        const {nom}=req.body
         const category = await prisma.category.findUnique({
             where: {
                nameCategory:nom
             }
         })
         if (category) return res.status(200).send({nameCategory:" le type de categorie est exist"})

         const NewCategory = await prisma.category.create({
             data :{
                nameCategory:nom,
                iconCategory:imageName
             }
         })
         if (!NewCategory)return res.status(200).send({success:"nouveau categories est ajouter"})
         return res.status(200).send({msg:"good"})
        },
        updateCategory: async(req, res) =>{
        
              }
,
deleteCategory :async  (req, res) =>{
 const {idCategory} = req.params
 try{
  await prisma.category.delete({
     where: {id:Number(idCategory)}
 })
 return res.status(200).send({success:"suppression de ctargorie est termine"})
 
}catch(err){
console.log(err)
return res.status(500).send({err})
 }
}

}
module.exports =categoryCtrl