import { useState } from "react";

export default function useDallCell() {
  const [ place, setPlace ] = useState("");

  const onArtCellClick = ( place ) => {
    setPlace( place );
  };

  return { place, onArtCellClick };
}