'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Ari = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.AriHome), { ssr: true })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <section className="mx-auto bg-gray-900 text-white relative w-screen h-screen flex flex-col lg:flex-row">
      <View orbit className='basis-1/2'>
        <Suspense fallback={null}>
          <Ari scale={0.25} position={[0, -2, 0]} rotation={[0.25, 0, 0]} />
          <Common />
        </Suspense>
      </View>
      <div className="py-10 px-10 lg:py-32 justify-end lg:flex lg:items-center basis-1/2">
        <div className="lg:text-right">
          <h1
            className="bg-gradient-to-r animated-background from-green-300 via-blue-400 to-purple-600 bg-clip-text text-5xl lg:text-8xl font-extrabold text-transparent"
          >
            Innovative
          </h1>
          <h1
            className="bg-gradient-to-r animated-background from-green-300 via-blue-400 to-purple-600 bg-clip-text text-5xl lg:text-8xl font-extrabold text-transparent"
          >
            Solutions,</h1>
          <h1
            className="bg-gradient-to-r animated-background from-green-300 via-blue-400 to-purple-600 bg-clip-text text-5xl lg:text-8xl font-extrabold text-transparent"
          > Positive</h1><h1
            className="bg-gradient-to-r animated-background from-green-300 via-blue-400 to-purple-600 bg-clip-text text-5xl lg:text-8xl font-extrabold text-transparent"
          > Vibes.
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Turning ideas into magic with cutting-edge tech, clear effective communication and teamwork.
          </p>

          <div className="mt-8 flex flex-wrap justify-end gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get in Touch
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/WIP"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
