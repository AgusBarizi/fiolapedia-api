const { model, Schema } = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator').default

const UserSchema = new Schema(
  {
    product_id: {
      type: String,
      required: true,
      trim: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const CartItem = model('CartItem', UserSchema)

module.exports = CartItem
