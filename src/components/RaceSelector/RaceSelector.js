//HELPERS
import raceLand from '../../helpers/raceLands';
//HOOKS
import usePlayerStoreData from '../../hooks/usePlayerStoreData';

export default function RaceSelector({role}) {
    const [playerData, playerFunctions] = usePlayerStoreData(role);

    const onSelect = (e) => {
        let race = e.target.value;
        playerFunctions.setRace(race);
        playerFunctions.setHomeLand(raceLand(race));
    }
    return (
        <select id="race" onChange={onSelect}>
            <option value="undead">Нежить</option>
            <option value="human">Рыцари</option>
            <option value="demon">Демоны</option>
            <option value="elf">Эльфы</option>
            <option value="drow">Темные эльфы</option>           
        </select>
    )
}