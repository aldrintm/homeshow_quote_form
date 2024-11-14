'use client'

import { useTransition } from 'react'
import addCustomer from '@/app/actions/addCustomer'
import Spinner from '@/components/Spinner'

const QuoteForm = () => {
  const data = async (formData) => {
    console.log(data)

    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  const [isPending, startTransition] = useTransition()

  const handleSubmit = (formData) => {
    startTransition(async () => {
      await addCustomer(formData)
    })
  }

  return (
    <section className='bg-white mx-auto px-2 h-screen'>
      <form action={handleSubmit}>
        <div className='bg-white md:container max-w-4xl mx-auto text-left mt-20 px-15 rounded-2xl'>
          <div className='mx-auto text-center pt-4 pb-4 text-2xl md:text-4xl text-blue-500 font-bold'>
            Let's Get you a Quote
            <p className='text-center text-base md:text2xl px-2 text-gray-500 font-bold'>
              We'd love to help you on your project.
            </p>
          </div>
          {/* <span className='flex items-center pb-2'>
          <span className='h-px flex-1 bg-gray-400 inset-x-0 top-1/2 -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></span>
        </span> */}
          {/* Divide Text and from */}
          <span className='flex items-center px-12 pb-2'>
            <span className='h-px flex-1 bg-gray-500'></span>
            {/* <span className='shrink-0 px-0'></span>
          <span className='h-px flex-1 bg-black'></span> */}
          </span>

          {/* First Name and Last Name Inputs */}
          <div className='grid grid-cols-1 md:mx-20 m-2 md:mt-4'>
            {/* Form Starts here */}
            <div className='grid md:grid-cols-2 gap-4 p-1 md:mx-8'>
              <div className=''>
                <label
                  htmlFor='firstName'
                  className='block text-xs font-light text-gray-700 ml-1'
                >
                  First Name
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  required
                  placeholder='First Name ...'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm text-xs md:text-sm'
                />
              </div>

              <div className=''>
                <label
                  htmlFor='lastName'
                  className='block text-xs font-light text-gray-700 ml-1'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  required
                  placeholder='Last name ...'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm text-xs md:text-sm'
                />
              </div>
            </div>

            {/* Email and Phone Inputs */}
            <div className='grid md:grid-cols-2 gap-4 p-1 md:mx-8 mb-1'>
              <div className=''>
                <label
                  htmlFor='email'
                  className='block text-xs font-light text-gray-700 ml-1'
                >
                  Email
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  required
                  placeholder='name@email.com'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm text-xs md:text-sm'
                />
              </div>

              <div className=''>
                <label
                  htmlFor='phone'
                  className='block text-xs font-light text-gray-700 ml-1'
                >
                  Phone
                </label>
                <input
                  type='tel'
                  id='lastName'
                  name='phone'
                  required
                  placeholder='(415) 333 1111'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm text-xs md:text-sm'
                />
              </div>
            </div>

            {/* Select Type of material for quote */}
            <div className='grid grid-cols-1 gap-4 p-1 md:mx-8 pb-2'>
              <div>
                <label
                  htmlFor='material'
                  className='block text-xs font-light text-gray-700 ml-1'
                >
                  {' '}
                  What material would you like to use for your countertop?{' '}
                </label>

                <select
                  name='material'
                  id='material'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm text-xs md:text-sm text-gray-700'
                >
                  <option value='cambria'>Cambria Quartz</option>
                  <option value='caesarstone'>Caesarstone Quartz</option>
                  <option value='silestone'>Silestone Quartz</option>
                  <option value='vadara'>Vadara Quartz</option>
                  <option value='viatera'>LG Viatera Quartz</option>
                  <option value='corian'>Corian Solid Surface</option>
                  <option value='himacs'>Hi-Macs Solid Surface</option>
                  <option value='wilsonart'>Wilsonart Solid Surface</option>
                  <option value='dekton'>Dekton/Neolith/Porcelain</option>
                  <option value='granite'>Granite Stone</option>
                  <option value='marble'>Marble Stone</option>
                  <option value='quartzite'>Quartzite Stone</option>
                </select>
              </div>
            </div>

            {/* Promo Code */}
            <div className='grid grid-cols-1 gap-4 p-1 md:mx-8 pb-2'>
              <div>
                <label
                  htmlFor='promo'
                  className='block text-xs font-light text-gray-700 ml-1'
                >
                  {' '}
                  Do you have a promo code?{' '}
                </label>

                <input
                  type='text'
                  id='promo'
                  name='promo'
                  required
                  placeholder='Look at your marketing material for a promo code'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm text-xs md:text-sm text-gray-700'
                />
              </div>
            </div>

            {/* Text Area to Provide Project Details */}
            <div className='grid grid-cols-1 gap-4 p-1 md:mx-8 pb-2'>
              <div className=''>
                <label
                  htmlFor='message'
                  className='block text-xs font-light text-gray-700 ml-1'
                >
                  Some Details About Your Project
                </label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Give us a quick note about your project ...'
                  required
                  rows='3'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm text-xs md:text-sm'
                />
              </div>
            </div>

            {/* File Upload for image or pdf */}
            <div className='grid grid-cols-1 gap-4 p-1 py-2 md:mx-8 pb-2'>
              <div className=''>
                <label
                  htmlFor='images'
                  className='block text-xs font-light text-gray-700 ml-1'
                >
                  Share us your images or PDF (select up to 4 file)
                </label>
                <input
                  type='file'
                  id='images'
                  name='images'
                  className='mt-1 w-full border-gray-200 text-xs md:text-sm'
                  accept='image/*'
                />
              </div>
            </div>

            {/* Button */}
            <div className='grid grid-cols-1 gap-4 p-1 py-2 md:mx-8'>
              {isPending ? (
                <Spinner />
              ) : (
                <div className='text-center'>
                  <button
                    type='submit'
                    disabled={isPending}
                    className='inline-flex w-full md:max-w-sm items-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'
                  >
                    <span className='text-sm font-medium text-center mx-auto'>
                      Send for a quote
                    </span>
                    <svg
                      className='size-5 rtl:rotate-180'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default QuoteForm
