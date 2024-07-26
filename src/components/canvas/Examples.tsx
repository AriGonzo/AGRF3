'use client'

import { useLayoutEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'

export function AriLoPoly(props) {
  const { scene, animations } = useGLTF('/ariPose.glb');



  let mixer
  if (animations.length) {
    mixer = new THREE.AnimationMixer(scene);
    animations.forEach(clip => {
      if (clip.name === 'AriSmile and point') {
        mixer.clipAction(clip);
      }
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta)
  })

  function onClick(x) {
    let action = mixer._actions[0];
    action.setLoop(THREE.LoopOnce);
    action.reset().play();
  }

  return (
    <mesh onClick={onClick}>
      <primitive object={scene} {...props} />
    </mesh>
  )
}

export function AriAtWork(props) {
  const { scene, animations } = useGLTF('/DigiariWORKING.glb');

  const animationKey = "Armature|mixamo.com|Layer0"

  let mixer
  if (animations.length) {
    mixer = new THREE.AnimationMixer(scene);
    animations.forEach(clip => {

      if (clip.name === animationKey) {
        const action = mixer.clipAction(clip);
        action.setLoop(THREE.LoopPingPong)
        action.play();
      }
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta)
  })

  return (
    <mesh>
      <primitive object={scene} {...props} />
    </mesh>
  )
}
