import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SoftwareProjects from './SoftwareProjects'

const Stuff = () => {
  return (
    <div className="py-20">
      <div className="section-header">
        <span className="section-title text-3xl mt-9 w-[10%]">Stuff</span>
      </div>
      <Tabs defaultValue="account" className="w-[100%] mx-auto" orientation="vertical">
        <TabsList className="mx-auto w-full flex gap-5 bg-[#16161a] rounded-[15px] sm:px-1 px-3">
          <TabsTrigger value="account" className="w-[31%] rounded-[12px]">Software</TabsTrigger>
          <TabsTrigger value="password" className="w-[31%] rounded-[12px]">Photography</TabsTrigger>
          <TabsTrigger value="music" className="w-[31%] rounded-[12px]">Music</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <SoftwareProjects />
        </TabsContent>
        <TabsContent value="password">
          <p className="text-xl text-center mt-5">Photography preview is under developed. Stay tune😉</p>
        </TabsContent>
        <TabsContent value="music">
          <p className="text-xl text-center mt-5">Still writing music with my bandmates.... Stay tune😉</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Stuff