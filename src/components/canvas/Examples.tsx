'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'

export function AriAtWork(props) {
  useGLTF.preload('/Digiari2d.glb')
  const { scene, animations } = useGLTF('/Digiari2d.glb');

  const animationKey = "SlimType"

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
