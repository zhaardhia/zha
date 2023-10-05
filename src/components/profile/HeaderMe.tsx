import React from 'react'
import Image from 'next/image'
const HeaderMe = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Image src="/me/dp.JPG" width={120} height={120} className="rounded-full" alt='profile picture' loading='lazy' />
        <h1 className="text-xl font-semibold">Firzha Ardhia Ramadhan</h1>
        <p className="text-slate-400">localdiskzha</p>
      </div>
    </div>
  )
}

export default HeaderMe