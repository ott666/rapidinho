
'use client'
import Spline from '@splinetool/react-spline'
import Image from 'next/image'




export default function Hero(){

  return(
    <>
    <div id="imgwrap" className='absolute z-10 w-[50%]  h-full'>

    <Image src='/REGISTRO.png' alt='img' fill style={{objectFit:'contain', WebkitFilter:'grayscale(100%)'}}/>
    </div>

    <div className='w-full h-full absolute pointer-events-none'>

    </div>
    <div className='absolute z-[-1] w-full h-full'>

    <Spline scene='https://prod.spline.design/R4FIWF99fCEqggqj/scene.splinecode' />
    </div>
    </>
  )
}

