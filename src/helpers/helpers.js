//add Branch skills
//depends [ addBuffValues ]
export function addBranchSkillValue( player, skillsObj, addValue ) {
  for ( const key in skillsObj ) 
  {
    if ( skillsObj[ key ].battle )
    {
      addBuffValues( player, [ skillsObj[ key ].value[ skillsObj[ key ].level - 1 ] ], addValue );
    };
  };
};

//remove Branch skills
//depends [ removeBuffValues ]
export function removeBranchSkillValue( player, skillsObj, removeValue ) {
  for ( const key in skillsObj ) 
  {
    if ( skillsObj[ key ].battle )
    {
      removeBuffValues( player, [ skillsObj[ key ].value[ skillsObj[ key ].level - 1 ] ], removeValue );
    };
  };
};

//add buff in buffsArray
//depends [ getAlly, getEnemy ]
export function addBuffValues( player, valuesArr, addValue ) {
  valuesArr.forEach( value => {
    switch ( value.effect ) {
      case "player":
        addValue( player, value );
        break;
      case "player_ally":
        addValue( player, value );
        console.log('player_ally')
        // getAlly( player ).forEach( ally => { addValue( ally, value ) });
        break;
      case "ally":
        getAlly( player ).forEach( ally => { addValue( ally, value ) });
        break;
      case "enemy":
        getEnemy( player ).forEach( anemy => { addValue( anemy, value ) });
        break;
      default:
        break;
    };
  });
};

//remove buff in buffsArray
//depends [ getAlly, getEnemy ]
export function removeBuffValues( player, valuesArr, removeValue ) {
  valuesArr.forEach( value => {
    switch ( value.effect ) {
      case "player":
        removeValue( player, value );
        break;
      case "player_ally":
        removeValue( player, value );
        console.log('player_ally')
        // getAlly( player ).forEach( ally => { removeValue( ally, value ) });
        break;
      case "ally":
        getAlly( player ).forEach( ally => { removeValue( ally, value ) });
        break;
     case "enemy":
        getEnemy( player ).forEach( anemy => { removeValue( anemy, value ) });
        break;
      default:
        break;
    };
  });
};

//getArtefactByPlace
export function getArtefactByPlace( artefactsData, place ){
  const [ artefact ]  = artefactsData.filter( artefact => artefact.place === place );
  return artefact ?? {};
};

//getArtefactById
export function getArtefactById( artefactsData, id ){
  const [ artefact ]  = artefactsData.filter( artefact => artefact.id === id );
  return artefact ?? {};
};

//getArtefactsArrayByPlace
export function getArtefactsArrayByPlace( artefactsData, place ){
  const artefacts  = artefactsData.filter( artefact => artefact.place === place );
  return artefacts;
};
//getArtefactValue
export function getArtefactValue( artefactId, ancient, perfect, artefactsData ){
  console.log('g',artefactsData)
  const [ artefact ]  = artefactsData.filter( artefact => artefact.id === artefactId );
  console.log('g',artefact)
  if( !artefact ) return [];
  let value = [];
  ancient ? value = [ ...artefact.value.ancient ] : value = [ ...artefact.value.common ];
  if( perfect )  value = [ ...value, ...artefact.value.perfect ];
  return value;
};

//get enemy
export function getEnemy( player ){
  switch ( player ) {
    case "mainAttacker":
      return [ "mainDefender", "firstDefenderAlly", "secondDefenderAlly" ];
    case "mainDefender":
      return [ "mainAttacker", "attackerAlly" ];
    default:
      break;
  };
};
//get ally
export function getAlly( player ){
  switch ( player ) {
    case "mainAttacker":
      return [ "attackerAlly" ];
    case "mainDefender":
      return [ "firstDefenderAlly", "secondDefenderAlly" ];
    default:
      break;
  };
};
//getRaceLand
export function getRaceLand( race ) {
  switch ( race ) {
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
};
//getFraction
export function getFraction( race ) {
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