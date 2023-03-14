import { useContext } from "react";
//CONTEXT
import PlayerContext from '../helpers/context.js';

export default function usePlayerContext() {
  const player = useContext( PlayerContext );

  return player;
}