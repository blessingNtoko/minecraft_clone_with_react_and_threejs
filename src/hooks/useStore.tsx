import create from 'zustand';
import { nanoid } from 'nanoid';

export const useStore = create((set: any) => ({
    texture: 'dirt',
    cubes: [{
        key: nanoid(),
        pos: [1, .5, 1],
        texture: 'dirt'
    },
    {
        key: nanoid(),
        pos: [4, .5, 4],
        texture: 'glass'
    }
],
    addCube: (x: number, y: number, z: number) => {
        set((prev: any) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x, y, z],
                    texture: [prev.texture]
                }
            ]
        }));
    },
    removeCube: () => {},
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {}
}))