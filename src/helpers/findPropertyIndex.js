export default function findPropertyIndex(array, property){
  return array.findIndex(item =>item.name === property.name) === -1 ? array.length : array.findIndex(item =>item.name === property.name);
}



 