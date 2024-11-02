import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/plamar-logo.jpg'

const ThankYouPage = () => {
  return (
    <section className='bg-white mx-auto p-2'>
      <div className='bg-white container max-w-4xl mx-auto text-center mt-20 px-1 py-10 rounded-2xl'>
        <span className='text-4xl font-semibold '>Thank You</span>
        <h3 className='p-4'>
          Please look for an email from us within 24 hours.
        </h3>
        <p>In the meantime, please visit our site</p>

        <Link href='https://www.plamarusa.com'>
          <div className='container mx-auto p-8'>
            <span className='flex items-center'>
              <span className='h-px flex-1 bg-black'></span>
              <span className='shrink-0 px-6'>
                www.plamarusa.com
                <Image
                  src={logo}
                  className='mx-auto py-6'
                  height='25'
                  alt=''
                ></Image>
              </span>

              <span className='h-px flex-1 bg-black'></span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default ThankYouPage
