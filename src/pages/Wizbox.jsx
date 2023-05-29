import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
export function Wizbox() {
  let Wizbox = "Wizbox.jsx"
  const { user, uid, login, logout } = useAuthContext()

  return (
    <section>
      <div className="flex flex-col justify-center translate-y-[50px] sm:pt-2">
        <h2>WizBox</h2>
        <p className="text-red-700">010.9876.1815</p>
        <h2>.shop</h2>
        <pre className="w-[300px]  mb-4 align-self-center">
          Text Message ONLY
        </pre>
        {!user && (
          <div>
            <div className="italic mb-2">google login for an ORDER</div>
            <button onClick={login} className={`btn btn--primary w-1/3 `}>
              login
            </button>
          </div>
        )}

        <span className="text-gray-400">↓ scroll DOWN ↓</span>
      </div>
    </section>
  )
}
