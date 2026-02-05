"use client"
import { useState } from "react"

export default function Page() {
  const [todos, setTodos] = useState([
    { id: "123", text: "shopping", status: "active" },
    { id: "124", text: "studying", status: "active" },
  ])
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  )
}
