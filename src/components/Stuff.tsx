import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SoftwareProjects from './SoftwareProjects'

const Stuff = () => {
  return (
    <div className="py-20">
      <div className="section-header">
        <span className="section-title text-3xl mt-9 w-[10%]">Stuff</span>
      </div>
      <Tabs defaultValue="account" className="w-[100%] mx-auto">
        <TabsList className="mx-auto w-full flex gap-5 bg-slate-800 rounded-2xl">
          <TabsTrigger value="account" className="w-[31%] rounded-xl">Software</TabsTrigger>
          <TabsTrigger value="password" className="w-[31%] rounded-xl">Photography</TabsTrigger>
          <TabsTrigger value="music" className="w-[31%] rounded-xl">Music</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <SoftwareProjects />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsContent value="music">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default Stuff