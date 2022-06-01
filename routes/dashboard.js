const router = require('express').Router()
const models = require('../models')

router.get('/', async (req,res)=>{
  const customer = await models.Customer.findByPk(req.session.customer.id, {
    include: [models.Bill]
  })
  res.render('dashboard',{
    locals:{
      customer:customer
    }
  })
})

module.exports = router