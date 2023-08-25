
'use client'
import { useGLTF } from '@react-three/drei'
import {Model} from '@/components/Teste'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

export default function Hero(){
  
  return(
    <div className='flex w-screen  h-screen'>
      <Canvas style={{
        height:'100vh',
        width:'100vw',
      }}>
        <Model/>
        <ambientLight intensity={0.2}/>
        <directionalLight color="white" position={[0, 0, 5]} />

      <OrbitControls/>
      </Canvas>

    
    </div>
)
}
