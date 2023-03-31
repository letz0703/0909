import {useState} from "react"
import UsePrevious from "../hooks/usePrevious"

export default function ShopHome() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("letz")
  const prevCount = UsePrevious(count)

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button className="btn red" onClick={decrease}>
        -
      </button>
      <span>{count} and </span>
      <span>prev:{prevCount}</span>
      <button className="btn blue" onClick={increase}>
        +
      </button>
      <button onClick={() => setName("존")}>이름변경</button>
    </div>
  )
}
