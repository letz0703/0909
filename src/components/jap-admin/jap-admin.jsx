import { useEffect } from "react"
import { useState } from "react"
import { getJorders, database } from "../../api/firebase"
export default function JapAdmin() {
  let JapAdmin = "jap-admin.jsx"
  const [customerEsp, setCustomerEsp] = useState()

  useEffect(() => {
    setCustomerEsp(getJorders())
  }, [])

  return (
    <div className="jap-admin">
      <p>{customerEsp}</p>
      <style>{`
				.jap-admin {
					background-color: powderblue; color: black
				}
			`}</style>
    </div>
  )
}
