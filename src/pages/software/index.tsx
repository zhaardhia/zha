import React from 'react'
import Layout from '@/components/Layout'
import FieldBadges from '@/components/FieldBadges'
import { softwareFields } from '@/lib/utils'

const index = () => {
  return (
    <Layout>
      <div className="min-h-[50vh]">
        <div className="h-28">
        </div>
        <FieldBadges fields={softwareFields} />

      </div>
    </Layout>
  )
}

export default index