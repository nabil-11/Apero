const router = require('express').Router();
const userCtrl = require('../Ctrl/userCtrl')

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
router.get("/all",userCtrl.GetAll)
router.post("/addlivreur",userCtrl.addLivreur)
router.post('/login',userCtrl.login)
router.get('/forgotpassword',userCtrl.ForgotPassword)
module.exports = router;
