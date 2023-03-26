//STYLES
import { ButtonItem } from "./styles/AlliesButton.styled"

export default function AlliesButton({ player, setChecker }) {
  return(
    <ButtonItem
      onClick = {() => { setChecker( player ) } }
    >
      { player === "mainDefender" || player === "mainAttacker" ? "Добавить союзника" : "Удалить союзника" }
    </ButtonItem>
  )
}