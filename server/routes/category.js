const express = require('express')
// const authCheck = require('../config/auth-check')
const Category = require('../models/Category')

const router = new express.Router()

router.post('/create', (req, res) => {
  const catObj = req.body

  Category
    .create(catObj)
    .then((createdCat) => {
      res.status(200).json({
        success: true,
        message: 'Category created successfully.',
        data: createdCat
      })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :('
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.get('/all', (req, res) => {
  Category
    .find()
    .then(categories => {
      res.status(200).json(categories)
    })
})

module.exports = router
