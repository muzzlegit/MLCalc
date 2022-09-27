const troopsNamesArray = ['porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage'];

// export default function getValueFromUnitPropertyArray(trooper, property){
//   let values = {};
//   troopsNamesArray.forEach(trooper => {
//   let value = troops[trooper][property].reduce((acc, item) => {
//       return acc + item.value
//     }, 0);
//     values = { ...values, [trooper]:value}
//   });
//   return values;
// }
export default function getValueFromUnitPropertyArray(property){
  let value = property.reduce((acc, item) => {
      return acc + item.value
    }, 0);
  return value;
}