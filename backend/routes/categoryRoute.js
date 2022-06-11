const router = require('express').Router();
const multer  = require('multer')
const categoryCtrl = require('../Ctrl/categoryCtrl')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/categoryIcon')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
  router.get('/',categoryCtrl.getAll)
router.post('/add',upload.single("CIcon"),categoryCtrl.addcategory)
router.delete('/delete/:idCategory',categoryCtrl.deleteCategory)
module.exports = router;