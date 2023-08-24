import {angleToRadians} from "@/utils/angle"
import { PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Three(){
    useFrame((state)=>{
        state.mouse
    })

    return(
        <>
        /*camera*/
        <PerspectiveCamera makeDefault  position={[0,1,5]}/>
        <OrbitControls />
        
        
        /* bola*/
        <mesh position={[0,1,0]}>
            <sphereGeometry args={[0.5,32,32]}/>
            <meshStandardMaterial wireframe color='red'/>
        </mesh>




        /* plano*/
        <mesh rotation={[-(angleToRadians(90)), 0, 0]}>
            <planeGeometry args={[7, 7]}/>
            <meshStandardMaterial color='blue'/>
        </mesh>


        /* iluminacao*/

        <ambientLight args={["#ffffff", 1]}/>
        </>
    )
}