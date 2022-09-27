
export default function ApostateChecker({setApostateValue}) {

  const onClick = (e) => {
    setApostateValue();
  }

  return (
      <input 
        type="checkbox"
        onClick={onClick}
      />
  )
}