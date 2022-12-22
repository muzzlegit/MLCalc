export default function addBranchSkillValue( skillsObj, setUnitProperty, player ) {
  for ( const key in skillsObj ) 
  {
    if ( skillsObj[ key ].battle )
    {
      setUnitProperty( player, { ...skillsObj[ key ].value[ skillsObj[ key ].level - 1 ] });
    }
  }
}