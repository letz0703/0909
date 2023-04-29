import React, { useId } from "react"
import * as Checkbox from "@radix-ui/react-checkbox"
import "./Checkbox.css"

export function MyCheckbox({ label }) {
  const id = useId()
  return (
    <div className="checkbox-wrapper">
      <Checkbox.Root className="checkbox" id={id}>
        <Checkbox.Indicator className="checkbox-indicator">
          ✓
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
