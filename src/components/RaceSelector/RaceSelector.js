//HELPERS
import raceLand from '../../helpers/raceLands';
//HOOKS
import usePlayerStoreFunctions from '../../hooks/usePlayerStoreFunctions';
//STYLES
import { SelectorBox, SelectorLabel, Select } from './RaceSelector.styled';

export default function RaceSelector({ player }) {
    const playerFunctions = usePlayerStoreFunctions( player );

    //HaNDLE FUNCTIONS
    const onSelect = ( e ) => {
        let race = e.target.value;
        playerFunctions.setRace( race );
        playerFunctions.setHomeLand(raceLand( race ));
    }

    return (
        <SelectorBox>
            <SelectorLabel>Расса</SelectorLabel>
            <Select id="race" onChange={ onSelect }>
                <option value="undead">Нежить</option>
                <option value="human">Рыцари</option>
                <option value="demon">Демоны</option>
                <option value="elf">Эльфы</option>
                <option value="drow">Темные эльфы</option>           
            </Select>
        </SelectorBox>
    )
}