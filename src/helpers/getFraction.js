export default function getFraction( race ) {
  switch ( race ) {
    case 'undead':
      return 'dark';
    case 'demon':
      return 'dark';
    case 'drow':
      return 'dark';
    case 'human':
      return 'light';
    case 'elf':
      return 'light';
    default:
      break;
  }
}
