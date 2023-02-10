import { useState, useEffect, useRef } from "react"
export default function FormWrapper({ title, children }) {
  let FormWrapper = "form-wrapper.jsx"

  return (
    <>
      <h2 className="formWrapper__title">{title}</h2>
      <div className="form-wrapper__children text-start">{children}</div>
      <style>{`
			.formWrapper__title{
				text-align: center;
				margin: 0;
				margin-bottom: 3rem;
			}
			.form-wrapper__children {
				display: grid;
				gap: 0rem .5rem;
				place-content: center;
			  grid-template-columns: auto minmax(auto, minmax(auto, 300px));
			}
			`}</style>
    </>
  )
}
