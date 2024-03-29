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
  const [japitems, setJapitems] = useJapitems([])
  const { user, uid } = useAuthContext()
  //const [mainItems, setMainItems] = useState(() => {
  //  return Object.values(product)
  //})
  //const [special, setSpecial] = useState([])

  //async function getSpecial() {
  //  await fetch("/products2.json", {
  //    //signal: controller.signal,
  //  })
  //    .then((response) => response.json())
  //    .then(setSpecial)
  //  //.finally(() => setIsLoading(false))
  //}

  const icUserPhone = localStorage.getItem("ic-user").phoneNumber
  useEffect(() => {
    //icUserPhone && getSpecial()
    icUserPhone && setMainItems([...special, ...japitems])
  }, [uid, japitems])

  useEffect(() => {
    localStorage.setItem("japitems", JSON.stringify(""))
  }, [user])

  return (
    <section
      className="product shop-home w-[100vw] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2"
      style={{ overflowY: "auto" }}
    >
      {japitems
        ?.filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search) ||
                item.enName.toLowerCase().includes(search) ||
                item.description?.toLowerCase().includes(search)
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
