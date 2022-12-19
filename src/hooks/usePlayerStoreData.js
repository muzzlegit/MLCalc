//STORE
import useStore from '../data/store/useStore';

export default function usePlayerStoreData( player ) {
  const playerData =  useStore( ( state ) => state[ player ]);

  return playerData ;
};