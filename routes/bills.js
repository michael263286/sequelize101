const router = require('express').Router()
const models = require('../models')

router.get('/',(req,res)=>{
  res.render('bills-new') 
})


router.post('/', async (req,res)=>{
  //got all fields?
  const{company, paid,amount,dueBy}=req.body
  if(!company || !paid || !amount ||!dueBy){
    res.send('please complete all fields')
    return
  }
  //find customers from session
  const customer = await models.Customer.findByPk(req.session.customer.id)
  //create bill for customer
  const bill = await customer.createBill({
    company:company,
    paid: paid,
    amount: amount * 100, //convert $ to cent
    dueBy
  })
  //redirect back to dashboard
  res.redirect('/dashboard')
})


module.exports = router