import { useStore } from "../hooks/useStore";
import { Cube } from "./cube";

export const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);
  console.log("Cubes :: ", cubes);
  return (
    <>
      {cubes.map(({ key, pos, texture }) => (
        <Cube key={key} position={pos} texture={texture} />
      ))}
    </>
  );
};
