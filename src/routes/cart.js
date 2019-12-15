const router = require('express').Router()
const sc = require('http-status-codes')

const auth = require('../middlewares/auth')

const Cart = require('../models/CartItem')

function debugHandler(error, result) {
  if (error) {
    console.error(result)
  } else {
    console.log(result)
  }
}

// router.get('/cart/items', auth, async ({ user, ca }, res) => {
//   try {

//     const trans = await Transaction.findOne({
//       status: 'OPEN',
//       user_id: user.id,
//     })
//     const cartItem = await CartItem.find({})
//     res.send({ transactions })
//   } catch (error) {
//     res.status(sc.INTERNAL_SERVER_ERROR).send({ error })
//   }
// })


module.exports = router
