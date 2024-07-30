'use client'

import ContactModal from '@/components/ContactModal'
import Landing from '@/components/Sections/Landing'
import Skills from '@/components/Sections/Skills'
import { useRef, useState } from 'react'
import { CSSTransition } from "react-transition-group";


export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const nodeRef = useRef(null);
  return (
    <>
      <section className="bg-gray-900 text-white h-screen flex flex-col pb-10 lg:flex-row">
        <Landing triggerContactModal={setShowModal} />
      </section>
      <section className="bg-gradient-to-b from-gray-900 to-gray-700 text-white lg:h-screen flex flex-col" id="skills">
        <Skills triggerContactModal={setShowModal} />
      </section>
      <CSSTransition
        in={showModal}
        nodeRef={nodeRef}
        timeout={400}
        classNames="alert"
        unmountOnExit
      >
        <ContactModal setShowModal={setShowModal} />
      </CSSTransition>
    </>
  )
}
