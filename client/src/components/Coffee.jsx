import React from 'react'

const Coffee = ({ image, qrCode }) => {
  return (
    <a href="https://www.buymeacoffee.com/rrishu561y" target='_blank'>
        <img 
        src={image}
        alt="Buy me a coffee"
        className='w-40' />
    </a>
  )
}

export default Coffee