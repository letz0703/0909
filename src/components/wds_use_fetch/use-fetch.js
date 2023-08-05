import { useEffect, useReducer } from "react"

const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.FETCH_START:
      return {
        isError: false,
        isLoading: true,
      }
    case ACTIONS.FETCH_SUCCESS:
      return {
        data: payload.data,
        isLoading: false,
        isError: false,
      }

    case ACTIONS.FETCH_ERROR:
      return {
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

//export function useFetch(url) {
export function useFetch(url, options = {}) {
  const [state, dispatch] = useReducer(reducer, {
    isError: false,
    isLoading: true,
  })

  //function

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_START })

    //2023.08.05/토
    //setData(undefined)
    //setIsError(false)
    //setIsLoading(true)

    const controller = new AbortController()

    fetch(url, { signal: controller.signal, ...options })
      //fetch(url, options)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then((data) => dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data }))
      //.then(setData)  2023.08
      .catch((e) => {
        if (e.name === "AbortError") return
        //dispatch({ type: ACTIONS.FETCH_ERROR, payload: { error: e } })
        dispatch({ type: ACTIONS.FETCH_ERROR })
        //setIsError(true)
      })
    //.finally(() => {
    //  if (controller.signal.aborted) return
    //  setIsLoading(false)
    //})

    return () => {
      controller.abort()
    }
  }, [url])

  //return { data, isError, isLoading }
  return state
}

// https://bit.ly/3YouA9h wds useReducer 18:
