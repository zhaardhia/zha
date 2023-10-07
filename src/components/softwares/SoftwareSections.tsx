import React from 'react'
import SoftwareProjects from '../SoftwareProjects'
import SoftwareApp from './SoftwareApp'
import SoftwareMiniProject from './SoftwareMiniProjects'
const SoftwareSections = () => {
  return (
    <div className="py-20">
      <div className="section-header">
        <span className="section-title text-3xl mt-9 sm:w-[10%] w-[40%]">Projects</span>
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <p className="section-title text-2xl mt-9">Apps</p>
          <SoftwareApp />
        </div>
        <div>
          <p className="section-title text-2xl mt-9">Mini Apps</p>
          <SoftwareMiniProject />
        </div>
      </div>
    </div>
  )
}

export default SoftwareSections