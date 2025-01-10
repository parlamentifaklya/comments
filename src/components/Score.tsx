import { useState } from "react"
import plus from "../assets/icon-plus.svg"
import minus from "../assets/icon-minus.svg"
import "../index.css"

const Score = (props: {score: number}) => {
  
    const [score, setScore] = useState<number>(props.score)

    return (
    <div>
        <button type="button" onClick={() => setScore(score+1)}><img src={plus}/></button>
        <div>{score}</div>
        <button type="button" onClick={() => setScore(score-1)}><img src={minus}/></button>
    </div>
  )
}

export default Score