import React, { FC } from 'react'
import Typewriter from './Typewriter'

interface IntroType {
  headerTitle: string;
  childTitle: string;
}
const Intro: FC<IntroType> = ({ childTitle, headerTitle }) => {
  return (
    <div className="min-h-[70vh] flex items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl">
          <Typewriter text={headerTitle} delay={100} />
        </h1>
        <h1 className="text-3xl">
          <Typewriter text={childTitle} delay={100} />
        </h1>
      </div>
    </div>
  )
}

export default Intro