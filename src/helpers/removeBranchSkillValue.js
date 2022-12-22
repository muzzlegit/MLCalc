export default function removeBranchSkillValue( skillsObj, setUnitProperty, player ) {
  for ( const key in skillsObj ) 
  {
    if ( skillsObj[ key ].battle )
    {
      setUnitProperty( player, { ...skillsObj[ key ].value[ skillsObj[ key ].level - 1 ], value: 0 });
      console.log('remove')
    }
  }
}

