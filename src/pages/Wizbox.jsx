import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
export function Wizbox() {
  let Wizbox = "Wizbox.jsx"
  const { user, uid, login, logout } = useAuthContext()

  return (
    <section>
      <div className="flex flex-col justify-center translate-y-[50px] sm:pt-2">
        <h2>WIZBOX</h2>
        <p className="text-red-700">010.9876.1815</p>
        <div className={`text-[25px] pt-1`}>.shop</div>
        <br />
        <span className="bg-black text-white font-bold p-4 w-[300px]  mb-4 align-self-center w-1/6">
          Text Message ONLY
        </span>
        {!user && (
          <div>
            <div className="italic mb-2">google login for an ORDER</div>
            <button
              onClick={login}
              className={`btn btn--primary w-1/7 red rounded-[12px] `}
            >
              login
            </button>
          </div>
        )}
        <span>&</span>
        <span className="text-gray-400">↓ scroll DOWN ↓</span>
      </div>
    </section>
  )
}
