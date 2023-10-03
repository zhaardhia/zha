import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 my-4">
        <Link href="/software/lsm" className="flex justify-between">
          <p>last man standing</p>
          <Icon icon="ion:open-outline" className="text-black text-2xl" />
        </Link>
        <hr />
      </div>
      <div className="flex flex-col gap-4 my-4">
        <Link href="/software/mertapada" className="flex justify-between">
          <p>warteg mertapada profit-spending management</p>
          <Icon icon="ion:open-outline" className="text-black text-2xl" />
        </Link>
        <hr />
      </div>
      <div className="flex flex-col gap-4 my-4">
        <Link href="/software/monda" className="flex justify-between">
          <p>monda kitchen commerce</p>
          <Icon icon="ion:open-outline" className="text-black text-2xl" />
        </Link>
        <hr />
      </div>
      <div className="flex flex-col gap-4 my-4">
        <Link href="/software/fokus" className="flex justify-between">
          <p>fokus</p>
          <Icon icon="ion:open-outline" className="text-black text-2xl" />
        </Link>
        <hr />
      </div>
    </div>
  )
}

export default Projects