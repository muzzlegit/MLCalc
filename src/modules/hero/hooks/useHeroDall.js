import { useState } from "react";
//CONSTS
import { DALL_CELLS } from "shared/utils/constants";

const useHeroDall = () => {
  const [dallArtefacts, setDallArtefacts] = useState(DALL_CELLS);
  return { dallArtefacts };
};

export default useHeroDall;
