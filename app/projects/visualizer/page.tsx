'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import * as VISUALIZER from './script.js'

export default function Page() {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current)
    if (ref.current) {
      VISUALIZER.blit(ref.current)
    }

  }, [])

  return (
    <section className="mx-auto">
      <canvas ref={ref} className="webgl"></canvas>
    </section>
  )
}
