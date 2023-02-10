import { useState, useEffect } from "react"

export function useMultiStepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i /** if last page */
      return i + 1
    })
    return
  }
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
    return
  }

  function goto(index) {
    setCurrentStepIndex(index)
  }

  function name() {
    return
  }

  function name() {}
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goto,
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  }
}
