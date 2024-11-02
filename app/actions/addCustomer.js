'use server'
import connectDB from '@/config/db'
import Customer from '@/models/Customer'
import cloudinary from '@/config/cloudinary'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// this action is added to the form to perform tasks
async function addCustomer(formData) {
  // connect to DB
  await connectDB()

  // check input to match names on each item for images
  const images = formData.getAll('images').filter((image) => image.name !== '')
  // .map((image) => image.name) - this was pulling images from the public folder now we are using Cloudinary so this is changed to secureUrls

  const customerData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    material: formData.get('material'),
    promo: formData.get('promo'),
    message: formData.get('message'),
  }
  console.log(customerData)

  // lets workout all our TOBESAVED images here
  const imageUrls = []
  // loop over all our image file and convert to base64
  // we still have our const images from above holding images from the form
  for (const imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer()
    const imageArray = Array.from(new Uint8Array(imageBuffer))
    const imageData = Buffer.from(imageArray)

    // convert imageData to base64
    const imageBase64 = imageData.toString('base64')

    // make request to Cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        // pass an object to specify folder
        folder: 'Homeshow_2024',
      }
    )

    // lets update our imageUrls
    imageUrls.push(result.secure_url)
  }

  // add the images to the propertyData object
  customerData.images = imageUrls

  // lets check the server to see all items uploaded to the DB
  console.log(customerData)

  // lets plug all the date using the property model
  const newCustomer = new Customer(customerData)
  // save it in our DB
  await newCustomer.save()

  // this will clear cached data in our form/memory
  revalidatePath('/', 'layout')

  // redirect to newly created thank you page details
  redirect(`/thankyou`)
}

export default addCustomer
