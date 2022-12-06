import { useBox } from "@react-three/cannon"
import * as textures from '../images/textures';

export const Cube = ({position,  texture}: any) => {
    const [ref]: any = useBox(() => ({
        type: 'Static',
        position
    }));
    const activeTexture = textures[`${texture}Texture` as keyof typeof textures];
    console.log('Active Texture :: ', activeTexture);
    
    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach='geometry'/>
            <meshStandardMaterial map={activeTexture} attach='material'/>
        </mesh>
    )
}