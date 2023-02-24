import { useEffect } from "react"
import { useState } from "react"
import { getJorders, database } from "../../api/firebase"
import JapEsp from "../jap___esp/jap___esp"
export default function JapAdmin() {
  let JapAdmin = "jap-admin.jsx"
  const [customerEsp, setCustomerEsp] = useState()

  useEffect(() => {
    setCustomerEsp(getJorders())
  }, [])

  return (
    <div className="jap-admin">
      <JapEsp />
      <style>{`
				.jap-admin {
				}
			`}</style>
    </div>
  )
}
