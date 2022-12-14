import React, {useState} from "react"
import {useQuery} from "@tanstack/react-query"

export default function Products() {
  const [checked, setChecked] = useState(false)

  const {
    isLoading,
    error,
    data: products
  } = useQuery(
    ["products", checked],
    async () => {
      console.log("fetching...", checked)
      const res = await fetch(`data/${checked ? "sale_" : ""}products.json`)
      return await res.json()
    },
    {staleTime: 1000 * 60 * 1}
  )

  const handleChange = () => setChecked(prev => !prev)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  )
}
