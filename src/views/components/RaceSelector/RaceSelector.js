import raceLand from "../../../helpers/raceLands";

export default function RaceSelector({setRace, setHomeLand}) {

    const onSelect = (e) => {
        let race = e.target.value;
        setRace(race);
        setHomeLand(raceLand(race));
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