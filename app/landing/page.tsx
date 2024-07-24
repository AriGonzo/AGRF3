'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Ari), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <section className="mx-auto bg-gray-900 text-white relative w-screen h-screen">
      <View className='z-0 absolute h-full sm:h-full sm:w-full'>
        <Suspense fallback={null}>
          <Dog scale={1} position={[-4, -11, -10]} rotation={[0.3, 0.4, -0.1]} />
          <Common />
        </Suspense>
      </View>
      <div className="mx-auto absolute lg:px-40 px-4 py-32 lg:flex lg:h-screen w-screen lg:items-center z-10 justify-end sm:max-auto">
        <div className="lg:text-right">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Innovative Code,

            <span className="sm:block"> Positive Vibes. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Turning ideas into magic with cutting-edge tech solutions and teamwork!
          </p>

          <div className="mt-8 flex flex-wrap justify-end gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
