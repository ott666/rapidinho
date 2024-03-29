/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 teste.gltf 
Author: AnixMoon (https://sketchfab.com/ani111)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/neon-stage-6037d87967fc4acf8e8ba1de875dc743
Title: Neon Stage
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/teste.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-317.686, 369.577, -669.114]} rotation={[-1.564, 0.23, -1.787]} scale={[32.654, 30.712, 78.171]}>
          <mesh geometry={nodes.Cylinder067_Material002_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cylinder067_Material002_0_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh geometry={nodes.Plane_Material_0.geometry} material={materials.Material} position={[76.675, 0, -166.309]} rotation={[-Math.PI / 2, 0, 0]} scale={[135.952, 146.829, 127.587]} />
        <mesh geometry={nodes.Torus_Material003_0.geometry} material={materials['Material.003']} position={[80.452, 226.188, -574.022]} scale={174.621} />
        <mesh geometry={nodes.Sphere_Material004_0.geometry} material={materials['Material.004']} position={[95.951, 485.54, -756.858]} rotation={[-Math.PI / 2, 0, -0.279]} scale={4761.809} />
      </group>
    </group>
  )
}

useGLTF.preload('/teste.gltf')
