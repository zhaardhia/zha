import React, { FC } from 'react'
import Typewriter from './Typewriter'
import FadeBox from './FadeBox';
interface IntroType {
  headerTitle: string;
  childTitle: string;
}
const Intro: FC<IntroType> = ({ childTitle, headerTitle }) => {
  return (
    <div className="sm:min-h-[80vh] min-h-[60vh] flex items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl">
          <Typewriter text={headerTitle} delay={100} />
        </h1>

      <FadeBox>
        <h1 className="text-3xl">
          {/* <Typewriter text={childTitle} delay={100} /> */}
          <p>{childTitle}</p>
        </h1>
      </FadeBox>
        
      </div>
    </div>
  )
}

export default Intro