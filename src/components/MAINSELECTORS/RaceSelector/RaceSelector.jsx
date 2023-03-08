//HOOKS
import { useContext } from 'react';
import useRace from './hooks/useRace.js';
//CONTEXT
import PlayerContext from '../../../helpers/context.js';
//STYLES
import { SelectorBox, SelectorLabel, Select } from './styles/RaceSelector.styled';

export default function RaceSelector() {
    const player = useContext( PlayerContext );
    const onRaceChange = useRace( player );

    return (
        <SelectorBox>
            <SelectorLabel>Расса</SelectorLabel>
            <Select id = "race" onChange = { onRaceChange }>
                <option value = "undead" >Нежить</option>
                <option value = "human" >Рыцари</option>
                <option value = "demon" >Демоны</option>
                <option value = "elf" >Эльфы</option>
                <option value = "drow" >Темные эльфы</option>           
            </Select>
        </SelectorBox>
    )
};