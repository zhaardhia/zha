import React from 'react'
import Layout from '@/components/Layout'
import FieldBadges from '@/components/FieldBadges'
import SocialMedias from '@/components/SocialMedias'
import Image from 'next/image'
import { techStack } from '@/lib/utils'
import SwiperDemoSoftware from '@/components/SwiperDemoSoftware'
import { softwareProjectsDetail, SoftwareProjectDetailType } from '@/lib/data'
import { useRouter } from 'next/router'
import { softwareFields } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import FadeBox from '@/components/FadeBox'
const lsmTech = [
  {
    name: "Next JS",
    icon: techStack["next"],
    color: "text-black"
  },
  {
    name: "Tailwind",
    icon: techStack["tailwind"],
    color: "text-black"
  },
  {
    name: "Typescript",
    icon: techStack["typescript"],
    color: "text-black"
  },
]

interface StackProjectType {
  name: string;
  icon: string;
  color: string;
}

interface TechType {
  next: string;
  tailwind: string;
  react: string;
  node: string;
  express: string;
  javascript: string;
  typescript: string;
  redux: string;
  // easy-peasy,
  // zustand,
  jwt: string;
  mysql: string;
  postgres: string;
  swift: string;
  graphql: string;
  gatsby: string;
  chakra: string;
  sass: string;
}

const SoftwareDetail = () => {
  const router = useRouter()

  const findDetailProj = softwareProjectsDetail.find((detailProj: SoftwareProjectDetailType) => {
    return detailProj.id === router.query.id
  })
  console.log({findDetailProj})
  const imageSource = []

  if (findDetailProj) {
    for (let index = 1; index <= findDetailProj?.showCase?.totalImage; index++) {
      // imageSource.push(`/${findDetailProj?.id}/${findDetailProj?.showCase?.formatName}${index}.${findDetailProj?.showCase?.formatFile}`)
      imageSource.push({
        src: `/${findDetailProj?.id}/${findDetailProj?.showCase?.formatName}${index}.${findDetailProj?.showCase?.formatFile}`,
        detail: `/software/${findDetailProj?.id}`
      })
    }
  }
  
  let techStacks: StackProjectType[] = []

  if (findDetailProj) {
    techStacks = findDetailProj.techStack.map((stack: string) => {
      const findStack = softwareFields.find(field => field.id === stack)
      return {
        name: findStack!.name,
        icon: techStack[stack as keyof TechType],
        color: findStack!.color
      }
    })
  }
  console.log({techStacks})
  return (
    <Layout>
      <div className="">
        <div className="h-28">
        </div>
        <FadeBox>
          <div className="sm:mt-0 mt-5 sm:gap-0 gap-2 flex sm:justify-between justify-around items-center sm:flex-row flex-col min-h-[70vh]">
            <p className="text-5xl">{findDetailProj?.name}</p>
            {findDetailProj?.banner && (
              <Image src={findDetailProj?.banner} alt='project banner' width={400} height={200} loading='lazy' />
            )}
          </div>
        </FadeBox>  

        {techStacks && (<FieldBadges fields={techStacks} />)}
      </div>
      <FadeBox>
        <div className="mt-28 mb-10">
          <div className="mb-10">
            <span className="section-title text-3xl mt-9 w-[10%]">Highlights</span>
          </div>
          <div className="flex flex-col gap-4 text-lg">
            {findDetailProj?.description?.map((description: string) => {
              return <p>{description}</p>
            })}
            {/* <p>A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto.</p>
            <p>A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto.</p> */}
          </div>
        </div>
      </FadeBox>
      {findDetailProj?.references && (
        <div className="flex gap-2 italic text-slate-600">
          References: {findDetailProj?.references?.map((reference: { name: string, link: string }, idx: number) => {
            return <a target='_blank' href={reference.link} className="references">{reference.name}{findDetailProj?.references?.length === idx + 1 ? "" : ","}</a>
          })}
        </div>
      )}

      <SwiperDemoSoftware src={imageSource}/>
      <div className="text-sm font-extralight text-slate-600 flex flex-col gap-3">
        {findDetailProj?.flagEnvironment?.environment !== "production" && (
          <p>This is <strong>{findDetailProj?.flagEnvironment?.environment}</strong> environment. {findDetailProj?.flagEnvironment?.notes && findDetailProj?.flagEnvironment?.notes}</p>
        )}

        {findDetailProj?.flagEnvironment?.link && (
          <div className="flex gap-3">
            {findDetailProj?.flagEnvironment?.link?.map((linky: { url?: string, note?: string}) => {
              console.log({linky})
              return (
                <Button variant="outline"><a target='_blank' href={linky?.url}>{linky?.note}</a></Button>
              )
            })}
          </div>
        )}
      </div>
      <div className="my-10 flex flex-col gap-5">
        <hr  />
        <SocialMedias />
      </div>
    </Layout>
  )
}

export default SoftwareDetail