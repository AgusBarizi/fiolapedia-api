const { model, Schema } = require('mongoose')

const TransactionSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        item_id: {
          type: Schema.Types.ObjectId,
        },
        book_id: {
          type: Schema.Types.ObjectId,
          ref: 'Book',
          required: true,
        },
        title: {
          type: String,
        },
        qty: {
          type: Number,
          required: true,
          validate(value) {
            if (value < 1) {
              throw new Error('Value must be more than 1')
            }
          },
        },
        price: {
          type: Number,
          required: true,
        },
        subtotal: {
          type: Number,
        },
      },
    ],

    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['OPEN', 'CLOSED'],
      default: 'OPEN',
    },
  },
  {
    timestamps: true,
  }
)

TransactionSchema.methods.insertItems = async function({
  book_id,
  qty,
  price,
  subtotal,
  title,
}) {
  this.items.push({ book_id, qty, price, subtotal, title })
  await this.save()
  return this.item_id
}

TransactionSchema.pre('save', async function(next) {
  // TODO: add stock checking
  //this.total_price = this.qty * this.price
  next()
})

const Transaction = model('Transaction', TransactionSchema)

module.exports = Transaction
