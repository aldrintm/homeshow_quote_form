'use-client'
import BarLoader from 'react-spinners/BarLoader'

const Spinner = () => {
  const override = {
    display: 'block',
    margin: '100px auto',
    borderColor: 'red',
  }

  return (
    <BarLoader
      color='#3b82f6'
      cssOverride={override}
      size={200}
      aria-label='Loading Spinner'
    />
  )
}

export default Spinner
