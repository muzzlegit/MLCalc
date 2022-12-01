export default function removeBranchSkillValue( skillsObj, setUnitProperty ) {
  for ( const key in skillsObj ) 
  {
    if ( skillsObj[ key ].battle )
    {
      setUnitProperty({ ...skillsObj[ key ].value[ skillsObj[ key ].level - 1 ], value: 0 });
    }
  }
}

