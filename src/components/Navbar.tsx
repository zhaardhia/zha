import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
const Navbar = () => {
  return (
    <nav className="fixed z-50 backdrop-blur-lg w-full bg-white">
      <div className="flex justify-between py-8 text-xl sm:w-[70%] w-[90%] max-w-[1000px] mx-auto items-center">
        <Link href="/">localdiskzha</Link>
        <div className="flex gap-3 p-2">
          <Link href="/" className={cn(
            "hover:border-[1px] hover:bg-slate-50 border-slate-300 p-1 rounded-xl w-[30px] h-[30px] flex justify-center"
          )}><Icon icon="ion:home-outline" /></Link>
          {/* <Link href="/" className={cn(
            "hover:border-[1px] hover:bg-slate-50 border-slate-300 p-1 rounded-xl w-[30px] h-[30px] flex justify-center"
          )}><Icon icon="mdi:creation-outline" /></Link> */}
          <Link href="/profile" className={cn(
            "hover:border-[1px] hover:bg-slate-50 border-slate-300 p-1 rounded-xl w-[30px] h-[30px] flex justify-center"
          )}><Icon icon="iconamoon:profile" /></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar