import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Computers = () => {
  const computer = useGLTF('./dekstop_pc/scene.gltf')
  return (
    <div>Computers</div>
  )
}

export default Computers