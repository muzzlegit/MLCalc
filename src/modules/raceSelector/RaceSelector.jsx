//UI
import Selector from "shared/ui/selector/Selector";
//HOOKS
import useRace from "./hooks/useRace";
//STYLES
import * as SelectorStyles from "./styles/Selector.styled";
//CONSTS

function RaceSelector() {
  const { race, onRaceChange } = useRace();
  const races = [
    { name: "Нежить", value: "undead" },
    { name: "Демоны", value: "demon" },
    { name: "Темные эльфы", value: "drow" },
    { name: "Рыцари", value: "human" },
    { name: "Эльфы", value: "elf" },
    { name: "Монстры", value: "monsters" },
  ];
  return (
    <>
      <Selector
        checker={race}
        valuesArray={races}
        onRaceChange={onRaceChange}
        styles={SelectorStyles}
      />
      <div>{race}</div>
    </>
  );
}

export default RaceSelector;
