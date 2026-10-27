'use client'

import Skill from "./Skill"
import { BiLogoTypescript } from "react-icons/bi";
import { TbUserHeart } from "react-icons/tb";
import { RiNextjsLine, RiTeamFill } from "react-icons/ri";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { Dispatch, SetStateAction } from "react";


export type Skill = {
  icon?: any,
  title: string,
  description: string
}

const skillIconClassName = 'text-5xl fill-purple-900';
const skillIconStrokeClassName = 'text-5xl stroke-purple-900';



const skills: Skill[] = [{
  icon: <BiLogoTypescript className={skillIconClassName} />,
  title: 'TypeScript',
  description: 'Experienced in using TypeScript to build scalable, maintainable codebases with improved developer productivity.'
}, {
  icon: <RiNextjsLine className={skillIconClassName} />,
  title: 'NextJS',
  description: 'Skilled in building reusable components, managing state with React hooks, and integrating with various libraries and tools to deliver scalable and maintainable front-end solutions.'
}, {
  icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-[47px] h-[47px] p-1" aria-hidden="true" viewBox="0 0 28 28"><path fill="#581c87" d="M14.362 27.78q-2.934 0-5.4-.972t-4.284-2.754a12.25 12.25 0 0 1-2.808-4.158q-.99-2.394-.99-5.202 0-3.348 1.026-5.94 1.044-2.592 2.88-4.356a12.5 12.5 0 0 1 4.284-2.7Q11.518.78 14.308.78q3.42 0 5.994 1.062t4.284 2.88a11.7 11.7 0 0 1 2.538 4.158q.828 2.322.756 4.86-.09 3.492-1.458 5.364-1.368 1.854-4.248 1.854a5.84 5.84 0 0 1-2.826-.702 3.7 3.7 0 0 1-1.764-2.07l1.044.054q-.738 1.386-2.016 1.944a6.5 6.5 0 0 1-2.61.558q-1.818 0-3.204-.774a5.7 5.7 0 0 1-2.178-2.214q-.792-1.422-.792-3.294 0-1.926.828-3.33a5.77 5.77 0 0 1 2.232-2.196q1.404-.774 3.168-.774 1.17 0 2.43.486 1.278.486 1.98 1.368l-.738.936V8.664h2.412l-.054 6.462q0 1.386.54 2.088t1.602.702q.936 0 1.44-.522.522-.54.72-1.458a10.7 10.7 0 0 0 .252-2.106q.054-2.79-.828-4.698t-2.394-3.078a9.5 9.5 0 0 0-3.294-1.71q-1.8-.54-3.582-.54-2.52 0-4.482.81-1.962.792-3.312 2.25-1.332 1.44-2.016 3.42-.666 1.962-.63 4.32.072 2.34.846 4.212a9.3 9.3 0 0 0 2.16 3.204 9.4 9.4 0 0 0 3.276 2.034q1.89.702 4.14.702 1.26 0 2.502-.288 1.26-.27 2.304-.774l1.026 2.808q-1.386.648-2.916.954a14.7 14.7 0 0 1-3.078.324m-.144-10.098q1.278 0 2.142-.738t.864-2.502q0-1.602-.774-2.412-.756-.828-2.142-.828-1.638 0-2.448.864t-.81 2.376q0 1.548.828 2.394.846.846 2.34.846" /></svg>,
  title: '@atproto',
  description: 'Eager to expand my expertise and continuously improve my skills, driven by a strong passion for data ownership and privacy.'
}, {
  icon: <TbUserHeart className={skillIconStrokeClassName} />,
  title: 'Passionate about UX',
  description: 'Expert in crafting intuitive and accessible interfaces that delight users, employing user-centered design principles to ensure seamless and satisfying interactions.'
}, {
  icon: <HiMiniChatBubbleLeftRight className={skillIconClassName} />,
  title: 'Strong Communication',
  description: 'Proficient in articulating complex technical concepts to diverse audiences, ensuring mutual understanding and collaboration.'
}, {
  icon: <RiTeamFill className={skillIconClassName} />,
  title: 'Team Player',
  description: 'Skilled in active listening, providing constructive feedback, and fostering an open and transparent communication environment that drives team success and project alignment.'
}]

export default function Skills({ triggerContactModal }: { triggerContactModal: Dispatch<SetStateAction<boolean>> }) {

  return (
    <div className="mx-auto lg:mt-0 max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8">
      <div className="text-center mb-30 sm:mb-5">
        <h2 className="text-3xl font-bold lg:mb-20 sm:text-5xl font-gilroy hover:text-glitch">Turning ideas into magic with cutting-edge tech, <span className="lg:block"> clear effective communication and teamwork.</span></h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <Skill {...skill} key={skill.title} />
        ))}
      </div>

      <div className="mt-12 text-center mb-12">
        <button onClick={() => triggerContactModal(true)} className="inline-block rounded bg-purple-900 px-12 py-3 text-lg font-large text-white transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-yellow-400">
          Let&apos;s Make Something
        </button>
      </div>
    </div>
  )
}
