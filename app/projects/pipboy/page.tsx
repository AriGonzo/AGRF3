'use client'

import dynamic from 'next/dynamic'

const Ari = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Ari), { ssr: true })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <section className="bg-black h-screen w-screen">
      
    </section>
  )
}
