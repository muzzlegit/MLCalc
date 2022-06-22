export default function raceLand(race) {
  switch (race) {
    case 'undead':
      return 'cursedForest';
    case 'demon':
      return 'deadLand';
    case 'drow':
      return 'cursedForest';
    case 'human':
      return 'hollyLand';
    case 'elf':
      return 'magicForest';
    default:
      break;
  }
}
