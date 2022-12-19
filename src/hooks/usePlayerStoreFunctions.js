//STORE
import useStore from '../data/store/useStore';

export default function usePlayerStoreFunctions() {
  const playerFunctions =  useStore( ( state ) => state.functions );

  return  playerFunctions;
};