const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const models = require('../../models')


router.get('/',(req,res)=>{
  models.Customer.findAll()
    .then(customers =>{
      res.json(customers)
    })
})

router.get('/:id',(req,res)=>{
  models.Customer.findByPk(req.params.id)
    .then(customer => {
      if(!customer){
        res.status(404).json({error:'Customer not found'})
        return
      }
      res.json(customer)
    })
})

module.exports = router