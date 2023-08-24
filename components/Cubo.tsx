import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import React, { useState, useEffect } from 'react';




function Cube(props:any) {
    return (
      <Box {...props}>
        <meshStandardMaterial color="white" />
      </Box>
    );
  }
  
  function MagicCube() {
    const [cubeStates, setCubeStates] = useState(createInitialCubeStates());
    useEffect(() => {
        shuffleCubes();
      }, []);

    const cubeSize = 1;
    const spacing = cubeSize + 0.1;
    const cubes = [];

    function createInitialCubeStates() {
        // Implemente a lógica para criar o estado inicial dos cubos aqui
      }
  
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          cubes.push(
            <Cube
              key={`${x}${y}${z}`}
              position={[x * spacing, y * spacing, z * spacing]}
            />
          );
        }
      }
    }
    function generateRandomMoves(numMoves) {
        const moves = [];
        const axes = ['x', 'y', 'z'];
      
        for (let i = 0; i < numMoves; i++) {
          const cubeIndex = Math.floor(Math.random() * 27); // Índice aleatório do cubo
          const rotationAxis = axes[Math.floor(Math.random() * 3)]; // Eixo aleatório de rotação
      
          moves.push({ cubeIndex, rotationAxis });
        }
      
        return moves;
      }

    function animateCube(cubeIndex, rotationAxis) {
        const newState = [...cubeStates]; // Criar uma cópia do estado atual
      
        // Atualizar o estado para simular a animação
        // Você precisa implementar a lógica para calcular as novas posições e rotações aqui
      
        setCubeStates(newState);
      }
      

      function shuffleCubes() {
        const moves = generateRandomMoves(); // Gere uma sequência de movimentos randomizados
      
        // Loop através dos movimentos e execute a animação
        for (const move of moves) {
          animateCube(move.cubeIndex, move.rotationAxis);
        }
      }

    return (
  <Canvas camera={{ position: [0, 0, 5] }} onCreated={({ camera }) => {
    camera.lookAt(0, 0, 0);
  }}>
    {/* ... (resto das luzes) */}
    {cubeStates.map((cubeState:any, index:number) => (
      <Cube
        key={index}
        position={cubeState.position}
        rotation={cubeState.rotation}
      />
    ))}
    <OrbitControls enableZoom={true} enablePan={false} minDistance={2} maxDistance={10} />
  </Canvas>
);
}
  export default MagicCube