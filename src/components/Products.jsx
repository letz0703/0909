import {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  Fragment,
} from "react"
import { SearchContext } from "../App"
import { useNavigate } from "react-router-dom"
import useProducts from "../hooks/use-products"
// import { useLocalStorage } from "../hooks/use-local-storage"
import { useJapitems } from "../hooks/use-japitems"
import { Row } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useDetail } from "../context/DetailContext"
import { useAuthContext } from "../context/AuthContext"
import { signInWithPopup } from "firebase/auth"
import { login } from "../api/firebase"
import { useLogger } from "../hooks/use-logger"
import useDebounce from "../hooks/use-debounce"
import { Japitem } from "./Japitem"

export default function Products(product) {
  // const { isOpen_Detail, open_Detail, close_Detail } = useDetail()
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  const { user, uid } = useAuthContext()
  const [mainItems, setMainItems] = useState(() => {
    return Object.values(product)
  })

  useEffect(() => {
    setMainItems(japitems)
  }, [uid, japitems])

  return (
    <section
      className="product shop-home w-[100vw] grid grid-cols-1 lg:grid-cols-5 gap-1 mt-5"
      style={{ overflowY: "auto" }}
    >
      {mainItems
        ?.filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search)
        })
        .map((japitem) => (
          //<Fragment key={crypto.randomUUID()}>
          <Japitem japitem={japitem} key={japitem.id} />
          //</Fragment>
        ))}
      <style>{`
          .product {
            padding: 1em;
            //background-color: powderblue; color: black
          }
        `}</style>
    </section>
  )
}
