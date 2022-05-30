export default function AttackRateSelector({setAttackRate}) {

  const onSelect = (e) => {
      let attackRate = e.target.value;
      setAttackRate(attackRate);
  }
  return (
      <select id="attackRate" onChange={onSelect}>
        <option value="Min">MIN</option> 
        <option value="Max">MAX</option>
      </select>
  )
}