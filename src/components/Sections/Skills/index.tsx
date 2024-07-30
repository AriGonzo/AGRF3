'use client'

import Skill from "./Skill"
import { BiLogoTypescript } from "react-icons/bi";
import { TbUserHeart } from "react-icons/tb";
import { RiNextjsLine, RiTeamFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


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
  icon: <TbBrandThreejs className={skillIconStrokeClassName} />,
  title: 'Three.js',
  description: 'Eager to expand my expertise and continuously improve my skills, driven by a strong passion for bringing immersive and interactive experiences to life.'
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
  const [glitch, setGlitch] = useState(false);

  return (
    <div className="mx-auto lg:mt-0 max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold sm:text-5xl font-gilroy hover:text-glitch"><span className={glitch ? 'text-glitch' : ''}>Turning ideas into magic with cutting-edge tech, <span className="lg:block"> clear effective communication and teamwork.</span></span></h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <Skill {...skill} key={skill.title} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button onClick={() => triggerContactModal(true)} className="inline-block rounded bg-purple-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-yellow-400">
          Let&apos;s Chat
        </button>
      </div>
    </div>
  )
}
