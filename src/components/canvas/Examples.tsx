'use client'

import { useGLTF } from '@react-three/drei'

export function Ari(props) {
  const { scene } = useGLTF('/cleanPoser.glb');
  scene.rotateX

  return <primitive object={scene} {...props} />
}
