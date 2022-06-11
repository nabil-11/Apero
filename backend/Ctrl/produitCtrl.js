const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const produitCtrl ={
    getAll:async(req,res)=>{
       const cc = req.query.category
      const page=req.query.page
      console.log(page)
       let produits = await prisma.produit.findMany({
        take: Number(page),
           where:{
            OR: [
                { CatNom: { contains: cc } },
              ],
           },
       })
       
       if(produits.length ==0) return res.status(400).send({error:"aucun produit exist"})
       if(produits) return  res.status(200).send({produits})
      
    },
    add: async (req,res)=>{
       const {nomProd,DescProd,Prix,Cnom}= req.body
       const img = req.file.filename

     if (!nomProd || !DescProd || !Prix || !Cnom || !img) return res.status(400).send({msg:"on a des champs vides"})
       try{
           await prisma.produit.create({
            
            data:{
               nomProduit:nomProd,
               ImageProduit:img,
               DescProduit:DescProd,
               prixProduit:Prix,
               CatNom:Cnom
          }
        
        ,
        include:{
            CNom: true,
        }  
              
           })
           return res.status(200).send({success:"nouveau produit ajouter"})
       }catch(err){
           console.log(err)
       }
    },
    

}
module.exports= produitCtrl