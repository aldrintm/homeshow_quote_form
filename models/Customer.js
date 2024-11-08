import { Schema, model, models } from 'mongoose'

const CustomerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First Name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },
    material: {
      type: String,
    },
    promo: {
      type: String,
    },
    message: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Customer = models.Customer || model('Customer', CustomerSchema)

export default Customer
