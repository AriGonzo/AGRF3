'use client'

import dynamic from 'next/dynamic'
import { Dispatch, SetStateAction, Suspense } from 'react'

const Ari = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.AriAtWork), { ssr: true })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: true
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: true })

const headlineClassName = "font-gilroy text-4xl mb-3"
const taglineClassName = "bg-gradient-to-r animated-background from-green-300 via-blue-400 to-purple-600 bg-clip-text text-5xl lg:text-8xl font-extrabold font-gilroyHeavy text-transparent"

export default function Landing({ triggerContactModal }: { triggerContactModal: Dispatch<SetStateAction<boolean>> }) {
  return (
    <>
      <View orbit className='basis-1/2 w-screen lg:absolute lg:z-10 lg:top-0 lg:left-0 lg:h-screen lg:w-2/3'>
        <Suspense fallback={null}>
          <Ari scale={0.15} position={[-1, -0.5, 0]} rotation={[0.5, 0.2, 0]} />
          <Common />
        </Suspense>
      </View>
      <div className="py-0 px-10 lg:py-10 lg:px-32 justify-end lg:flex lg:items-center basis-1/2 lg:w-screen lg:basis-auto">
        <div className="lg:text-right">
          <h1 className={headlineClassName}>Ari Gonzalez | Software Engineer</h1>
          <h2 className={taglineClassName}> Innovative</h2>
          <h2 className={taglineClassName}>Solutions,</h2>
          <h2 className={taglineClassName}> Positive</h2>
          <h2 className={taglineClassName}> Vibes.</h2>
          <div className="mt-8 flex flex-wrap justify-end gap-4">
            <button onClick={() => triggerContactModal(true)} className="block w-full rounded border border-purple-900 bg-purple-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
              Get in Touch
            </button>
            <a className="text-center block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href="#skills" >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
