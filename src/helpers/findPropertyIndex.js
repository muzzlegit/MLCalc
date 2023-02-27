export default function findPropertyIndex( array, property ){
  return array.findIndex( item => item.id === property.id ) === -1 ? array.length : array.findIndex( item => item.id === property.id );
}



 