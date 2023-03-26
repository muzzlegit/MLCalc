import { nanoid } from "nanoid";
//MODULES
import { UnitCard, useTroops } from "modules/unit";
//HOOKS
import usePlayerContext from "shared/hooks/usePlayerContext";
//STYLES
import { SquadBox, UnitsBox } from "./styles/Squad.styled";
//CoNSTS
const UNITS = [
  "porter",
  "swordsman",
  "cavalier",
  "flying",
  "archer",
  "healer",
  "mercenary",
  "mage",
];
function Squad() {
  const player = usePlayerContext();
  return (
    <SquadBox>
      <UnitsBox>
        {UNITS.map(trooper => {
          return (
            <li key={nanoid()}>
              <UnitCard unitName={trooper} />
            </li>
          );
        })}
      </UnitsBox>
    </SquadBox>
  );
}

export default Squad;
