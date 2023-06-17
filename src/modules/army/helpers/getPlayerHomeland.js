function getPlayerHomeland(playerRace) {
  switch (playerRace) {
    case "undead":
      return "cursedForest";
    case "demon":
      return "deadLand";
    case "drow":
      return "cursedForest";
    case "human":
      return "hollyLand";
    case "elf":
      return "magicForest";
    default:
      return "none";
  }
}

export default getPlayerHomeland;
