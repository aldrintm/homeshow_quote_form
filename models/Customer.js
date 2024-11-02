import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: [true, 'First Name is required'],
    },
    last_name: {
      type: String,
      required: [true, 'Last Name is required'],
    },
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Email is required'],
    },
    phone: {
      type: String,
      unique: [true, 'Phone already exist'],
      required: [true, 'Phone is required'],
    },
    material: {
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

const User = models.User || model('User', UserSchema)

export default User
