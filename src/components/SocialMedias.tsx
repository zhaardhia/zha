import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const SocialMedias = () => {
  return (
    <div className="flex gap-2 text-3xl">
      <a href='https://www.linkedin.com/in/firzharamadhan/' target='_blank'><Icon icon="mdi:linkedin" className="hover:text-blue-600 cursor-pointer"  /></a>
      <a href="https://www.github.com/zhaardhia/" target='_blank'><Icon icon="mdi:github" className="hover:text-slate-50 hover:bg-black rounded cursor-pointer"  /></a>
      <a href="https://open.spotify.com/user/firzharamadhan27?si=37c6d0d89f5344cc" target='_blank'><Icon icon="mdi:spotify" className="hover:text-green-500 cursor-pointer" /></a>
      <a href="mailto:firzharamadhan27@gmail.com" target='_blank'><Icon icon="mdi:gmail" className="hover:text-red-600 cursor-pointer" /></a>
      <a href="https://wa.me/08551498798" target='_blank'><Icon icon="ic:baseline-whatsapp" className="hover:text-green-600 cursor-pointer" /></a>
    </div>
  )
}

export default SocialMedias
