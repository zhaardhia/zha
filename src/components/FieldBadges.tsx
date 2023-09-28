import React from 'react'
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import FadeBox from './FadeBox';

interface FieldBadgeType {
  name: string;
  icon: string;
  color: string;
  index?: number;
}

const fields = [
  {
    name: "Software Engineering",
    icon: "teenyicons:code-solid",
    color: "text-yellow-600"
  },
  {
    name: "Frontend Developer",
    icon: "icon-park-solid:web-page",
    color: "text-blue-600"
  },
  {
    name: "Freelancer",
    icon: "simple-icons:freelancer",
    color: "text-green-500"
  },
  {
    name: "Analog Photography",
    icon: "mdi:film",
    color: "text-slate-500"
  },
  {
    name: "Street & Portrait Photography",
    icon: "mdi:photography",
    color: "text-red-500"
  },
  {
    name: "Music",
    icon: "mdi:music",
    color: "text-amber-700"
  },
  {
    name: "Audio Engineer",
    icon: "game-icons:lightning-frequency",
    color: "text-orange-500"
  },
]

const FieldBadge: React.FC<FieldBadgeType> = ({ icon, name, color, index }) => {
  console.log({index})
  if (index) return (
    <FadeBox delay={`${index + 1}00ms`}>
      <div className="flex gap-1 items-center px-5 py-3 rounded-full border-[1px] border-slate-300">
        <Icon icon={icon} className={cn(
          "text-lg",
          color
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

const FieldBadges = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      {fields.map((field: FieldBadgeType, index: number) => {
        return <FieldBadge icon={field.icon} name={field.name} color={field.color} index={index}/>
      })}
    </div>
  )
}

export default FieldBadges
