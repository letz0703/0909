import { useEffect } from "react"
import { useState } from "react"
import { getJorders, database } from "../../api/firebase"
import JapEsp from "../jap___esp/jap___esp"
export default function JapAdmin() {
  return (
    <div className="jap-admin">
      <JapEsp />
    </div>
  )
}
