'use client'

import { useLayoutEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'

export function Ari(props) {
  const { scene, animations } = useGLTF('/cleanPoser2.glb');



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
    action.play();
  }

  return (
    <mesh onClick={onClick}>
      <primitive object={scene} {...props} />
    </mesh>
  )
}
