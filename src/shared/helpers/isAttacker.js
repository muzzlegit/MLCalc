function isAttacker(player) {
  switch (player) {
    case "mainAttacker":
      return true;
    case "attackerAlly":
      return true;
    case "attackerSecondAlly":
      return true;
    default:
      return false;
  }
}

export default isAttacker;
