import { useState, useEffect, useRef } from "react"
export default function FormWrapper({ title, children }) {
  let FormWrapper = "form-wrapper.jsx"

  return (
    <div className="formWrapper__">
      <h2 className="formWrapper__title">{title}</h2>
      <div className="formWrapper__children">{children}</div>
      <style>{`
			.formWrapper__title{
				text-align: center;
				margin: 0;
				margin-bottom: 2rem;
			}
			.formWrapper__children {
				display: grid; gap: 1rem .5rem;
				grid-template-columns: auto minmax(auto, 400px);
			}
			`}</style>
    </div>
  )
}
