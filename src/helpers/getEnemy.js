export default function getEnemy( player ){
  switch ( player ) {
    case "mainAttacker":
      return ["mainDefender"];
    case "mainDefender":
      return ["mainAttacker"];
    default:
      break;
  }
}