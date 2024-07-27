'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Ari = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.AriAtWork), { ssr: true })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <section className="mx-auto bg-gray-900 text-white relative w-screen h-screen flex flex-col lg:flex-row">
      <div className="py-10 px-10 lg:py-32 justify-end lg:flex lg:items-center basis-1/2">
        <div className="lg:text-right">
          <h1
            className="bg-gradient-to-r animated-background from-green-300 via-blue-400 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl py-2"
          >
            Thanks for checking out
            <span className="sm:block"> my work in progress. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            I&apos;m hard at work adding more fun surprises and interactive elements so be sure to check back!</p>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            <span className="block">If you&apos;d like to follow along the progress, check out my blog below.
              Also, if you have any ideas kicking around and could use some help, email me! I&apos;m always down to chat</span>
          </p>

          <div className="mt-8 flex flex-wrap justify-end gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="https://blog.arigonzalez.dev"
            >
              Blog
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <View orbit className='basis-1/2 sm:mx-10'>
        <Suspense fallback={null}>
          <Ari scale={0.15} position={[-0.5, 0, 0]} rotation={[0.5, -0.3, 0]} />
          <Common />
        </Suspense>
      </View>
    </section>
  )
}
