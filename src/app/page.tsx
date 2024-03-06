'use client'
import LeftDrawer from '@/components/LeftDrawer'
import { CloudsIcon, DownCaretIcon, DrawerMenuIcon, SearchIcon } from '@/components/icons'
import useDisclosure from '@/components/useDisclosure'
import Image from 'next/image'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  if(isOpen) return <LeftDrawer onClose={onClose} />

  return (
    <main className='flex min-h-screen w-full flex-col items-center'>
      <div className='flex w-full items-center justify-between px-6 py-10'>
        <button type='button' onClick={onOpen}>
          <DrawerMenuIcon />
        </button>
        <SearchIcon />
      </div>
      <div className='flex w-full items-center justify-between px-6'>
        <div className='flex w-1/2 flex-col gap-2'>
          <h1 className='text-[25px] font-bold text-[#003339]'>New York, United States</h1>
          <h2 className='text-base font-bold text-[#96969A]'>Oct 04, 2019</h2>
          <div className='flex items-center gap-1'>
            <CloudsIcon />
            <h3 className='text-base font-bold text-[#057BFF]'>Cloudy</h3>
          </div>
        </div>
        <Image src='/images/NewYork.png' width={150} height={150} alt='Weather' />
      </div>
      <div className='w-full px-6'>
        <div className='relative h-40 w-full'>
          <Image src='/images/WeatherReport.svg' className='object-contain' fill alt='Weather Report' />
        </div>
      </div>
      <div className='w-full px-6 pt-4'>
        <div className='flex w-full flex-col gap-4 border-y border-[#F1F1F3] py-6'>
          <h2 className='text-lg font-bold text-[#003339]'>Additional Info</h2>
          <div className='flex items-center justify-between'>
            {[
              {
                title: 'Precipitation',
                value: '3%',
              },
              {
                title: 'Humidity',
                value: '74%',
              },
              {
                title: 'Windy',
                value: '18 km/h',
              },
            ].map((item, i) => (
              <div className='flex flex-col gap-2' key={i}>
                <h3 className='text-sm font-normal text-[#96969A]'>{item.title}</h3>
                <p className='text-base font-bold text-[#003339]'>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full pt-6'>
        <div className='flex items-center justify-between px-6'>
          <h2 className='text-lg font-bold text-[#003339]'>Temperature</h2>
          <button className='flex items-center gap-2 rounded-md border border-[#003339] p-2'>
            <h4 className='text-[10px] font-bold text-[#003339]'>Last month</h4>
            <DownCaretIcon />
          </button>
        </div>
        <div className='relative h-[12.5rem] w-full'>
          <Image src='/images/WeatherGraph.svg' className='object-contain' fill alt='Weather Graph' />
        </div>
      </div>
    </main>
  )
}
