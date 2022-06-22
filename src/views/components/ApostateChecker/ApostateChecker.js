import { useEffect } from "react"
export default function ApostateChecker({setApostateValue}) {
const onClick = (e) => {
    setApostateValue(e.currentTarget.checked);

}
  return (
      <input 
        type="checkbox"
        onClick={onClick}
      />
  )
}