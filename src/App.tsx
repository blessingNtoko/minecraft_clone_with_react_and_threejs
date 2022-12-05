import { Canvas } from "@react-three/fiber";
import { Sky } from '@react-three/drei';
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/ground";
import { Player } from "./components/player";
import { FPV } from "./components/fpv";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}/>
        <ambientLight intensity={.5}/>
        <FPV />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
    </>
  );
}

export default App;
