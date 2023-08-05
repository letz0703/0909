import { useReducer } from "react"
import "../../css/buttons.css"

const ACTIONS = {
  DECREMENT: "DECREMENT",
  INCREMENT: "INCREMENT",
  RESET: "RESET",
  PLUS5: "PLUS5",
}

function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return (count > 0 && count - action.payload.value) || 0
    case ACTIONS.INCREMENT:
      return count + 1
    case ACTIONS.RESET:
      return 0
    case ACTIONS.PLUS5:
      return count + action.payload.value
    default:
      return count
  }
}

export function Counter({ initialcount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialcount)

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DECREMENT, payload: { value: 1 } })
        }
        className={`btn btn--primary`}
      >
        -
      </button>
      {count}
      <button
        onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
        className={`btn btn--primary`}
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.RESET })}
        className={`btn red`}
      >
        reset
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.PLUS5, payload: { value: 5 } })}
        className={`btn blue`}
      >
        +5
      </button>
    </>
  )
}

//https://bit.ly/3YouA9h
