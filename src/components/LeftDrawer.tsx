import Image from 'next/image'
import { CrossIcon, LocationIcon } from './icons'

const LeftDrawer = ({ onClose }: { onClose: () => void }) => {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-between p-6 font-abhaya'>
      <div className='absolute top-0 z-0 h-full w-full'>
        <Image src='/images/Hero.png' fill className='object-cover' alt='Hero' />
      </div>
      <div className='z-[1] flex min-h-full w-full flex-col items-center gap-8'>
        <div className='flex w-full items-center justify-between'>
          <button type='button' onClick={onClose}>
            <CrossIcon />
          </button>
          <div className='grid h-[28px] w-[53px] place-items-center rounded-md bg-[#FF2D55] text-sm font-bold text-white'>
            LIVE
          </div>
        </div>
        <div className='flex w-full items-center gap-2 px-4 pt-20'>
          <LocationIcon />
          <h2 className='text-sm font-bold text-white'>CURRENT LOCATION</h2>
        </div>
        <h1 className='w-full text-[45px] font-bold tracking-[0.45px] text-white'>
          New York, <br /> United States
        </h1>
      </div>
    </main>
  )
}

export default LeftDrawer
