import React from 'react'
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import FadeBox from './FadeBox';
import { useRouter } from 'next/router';
interface FieldBadgeType {
  name: string;
  icon: string;
  color: string;
  index?: number;
}

interface FieldsType {
  fields: FieldBadgeType[];
}


const FieldBadge: React.FC<FieldBadgeType> = ({ icon, name, color, index }) => {
  console.log({index})
  const router = useRouter()
  const isThisAllProject = router?.pathname === "/software"
  console.log(router.pathname)
  if (index) return (
    <FadeBox delay={`${index + 1}00ms`}>
      <div className="flex gap-1 items-center px-5 py-3 rounded-full border-[1px] border-slate-300">
        <Icon icon={icon} className={cn(
          "text-lg",
          isThisAllProject ? "text-black" : color
        )} />
        <p>{name}</p>
      </div>
    </FadeBox>
  )
  return (
    <FadeBox>
      <div className="flex gap-1 items-center px-5 py-3 rounded-full border-[1px] border-slate-300">
        <Icon icon={icon} className={cn(
          "text-lg",
          color
        )} />
        <p>{name}</p>
      </div>
    </FadeBox>
  )
}

const FieldBadges: React.FC<FieldsType> = ({ fields }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {fields.map((field: FieldBadgeType, index: number) => {
        return <FieldBadge icon={field.icon} name={field.name} color={field.color} index={index}/>
      })}
    </div>
  )
}

export default FieldBadges
