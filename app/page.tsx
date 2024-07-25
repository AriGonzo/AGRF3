'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Ari = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Ari), { ssr: true })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <section className="mx-auto bg-gray-900 text-white relative w-screen h-screen">
      <View orbit className='absolute h-full sm:h-full sm:w-full hidden lg:block z-0'>
        <Suspense fallback={null}>
          <Ari scale={0.25} position={[-1, -2.75, 2]} rotation={[0.3, 0.4, -0.1]} />
          <Common />
        </Suspense>
      </View>
      <div className="absolute px-10 py-32 w-screen z-10 justify-end lg:mx-auto lg:px-40 lg:flex lg:h-screen lg:items-center ">
        <div className="lg:text-right">
          <h1
            className="bg-gradient-to-r animated-background from-green-300 via-blue-400 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Innovative Code,

            <span className="sm:block"> Positive Vibes. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Turning ideas into magic with cutting-edge tech solutions,<span className="block">clear effective communication, and teamwork.</span>
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
              href="#"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
