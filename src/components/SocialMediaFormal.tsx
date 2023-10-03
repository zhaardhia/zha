import React from 'react'
import { Icon } from '@iconify/react'
const SocialMediaFormal = () => {
  return (
    <div className="flex gap-2 text-3xl">
      <a href='https://www.linkedin.com/in/firzharamadhan/' target='_blank'><Icon icon="mdi:linkedin" className="hover:text-blue-600 cursor-pointer"  /></a>
      <a href="https://www.github.com/zhaardhia/" target='_blank'><Icon icon="mdi:github" className="hover:text-slate-50 hover:bg-black rounded cursor-pointer"  /></a>
      <a href="mailto:firzharamadhan27@gmail.com" target='_blank'><Icon icon="mdi:gmail" className="hover:text-red-600 cursor-pointer" /></a>
      <a href="https://wa.me/08551498798" target='_blank'><Icon icon="ic:baseline-whatsapp" className="hover:text-green-600 cursor-pointer" /></a>
    </div>
  )
}

export default SocialMediaFormal