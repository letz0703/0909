import {Offcanvas, Stack} from "react-bootstrap"
// import storeItems from "../data/items.json"
import {OffcanvasHeader} from "react-bootstrap"
import {useShoppingCart} from "../context/ShoppingCartContext"
import FormatCurrency from "../util/formatCurrency"
import CartItem from "./CartItem"
import {useJapitems} from "../hooks/use-japitems"
import {useLocalStorage} from "../hooks/use-local-storage"
import {addDoc, collection} from "firebase/firestore"
import {
  getRDB_users,
  db,
  auth,
  addNewCart,
  updateRDB_user,
  getRDB_user,
  updateCartTotal
} from "../api/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import {useRef, useState} from "react"
import {useEffect} from "react"
import {RiWindowLine} from "react-icons/ri"
import {useNavigate} from "react-router-dom"
// type PopCartProps = {
//   isOpen: boolean
// }

const deleiveryCost = parseInt(4000)

export function PopCart({isOpen}) {
  const [japitems] = useJapitems()
  const {closeCart, openCart, cartItems, getTotal} = useShoppingCart()
  const [local__icCart, setCartItems] = useLocalStorage("ic-cart", {
    ...cartItems
  })
  const [user] = useAuthState(auth)

  // localStorage.getItem("ic-user")
  const [currentAddress, setCurrentAddress] = useState()

  // useEffect(() => {
  //   const a = localStorage.getItem("ic-cart")
  //   setCurrentAddress(a?.sendTo)
  // }, [])

  // const [deliveryTo, setDeliveryTo] = useState(() => {
  //   getRDB_user(user?.uid)
  //   // console.log(Object.values(a))
  // })
  // const [total, setTotal] = useState(0)

  const handleCart__Order = async cartItems => {
    // console.log(cartItems)
    getRDB_users(user?.uid) //
      .then(res => {
        const data = Object.values(res)
        return data.find(r => r.uid === user?.uid)
      })
      .catch(error => alert(error))

    // if (a.deliveryTo === undefined || a.deliveryTo === "") {
    //   const newAddress = prompt("배송지 입력")
    //   setCurrentAddress(newAddress)
    //   await updateRDB_user(newAddress)
    // }

    // if (a.deliveryTo === "") {
    //   const newAddress = prompt("배송지 입력")
    //   setDeliveryTo(newAddress)
    // } else {
    //   console.log(a.deliveryTo)
    // }

    // if (a.deliveryTo) {
    //   return
    // }
    // if (a.deliveryTo !== "") {
    //   return
    // } else {
    // updateRDB_user(newAddress)
    // }

    await addNewCart(
      user.uid,
      crypto.randomUUID(),
      cartItems,
      currentAddress,
      total_ref.current
    )
    // .catch((error) => alert(error))
    // await addNewCart(user.uid, crypto.randomUUID(), local__icCart)
    // await addDoc(cartRef, {
    //   userId: user.uid,
    //   cartId: crypto.randomUUID(),
    //   orderDate: Date(),
    //   cartItems: local__icCart,
    //   total: total,
    // })
    // localStorage.setItem("cart-total", prev => {
    //   return JSON.stringify({...cartItems, total: total_ref.current})
    // })
    setCartItems([])
    window.location.replace("./shop")
  }

  function handleResetCart() {
    setCartItems([])
    window.location.replace("./shop")
  }

  const [icUser, setIcUser] = useState(() => {
    return localStorage.getItem("ic-user")
  })

  function changeAddress() {
    const newAddress = prompt("배송지 입력")
    // console.log("newAddress:", newAddress)
    // setCurrentAddress(newAddress)
    // setDeliveryTo(newAddress)
    // console.log("deliveryTo:", deliveryTo)
    newAddress && localStorage
    localStorage.setItem(
      "ic-cart",
      JSON.stringify({...cartItems, sendTo: newAddress})
    )
    setCurrentAddress(newAddress)
    // localStorage.setItem (
    //   "ic-user",
    //   JSON.stringify((prev) => {
    //     return {...prev, sendTo: newAddress}
    //   }
    // )

    updateRDB_user(newAddress)
    setCurrentAddress(newAddress)
    if (newAddress != "") {
      alert("주소가 변경되었습니다")
    }
  }

  useEffect(() => {
    getRDB_user()
  }, [user])

  const total_ref = useRef(0)

  // useEffect(() => {
  //   console.log("total_ref.current", total_ref.current)
  // }, [total_ref.current])

  useEffect(() => {
    total_ref.current && updateCartTotal(cartItems, total_ref.current)
  }, [total_ref.current])
  // local storage 에 sendTo 가 있는지 확인 한다
  useEffect(() => {
    const a = localStorage.getItem("ic-cart")
    a.sentTo
      ? setCurrentAddress(a?.sendTo)
      : () => {
          setCurrentAddress("배송지 없음")
          localStorage.setItem("ic-user", JSON.stringify(""))
        }
  }, [user])

  function calTotal() {
    return cartItems.reduce((total, cartItem) => {
      // const item = storeItems.find((i) => i.id === cartItem.id)
      const item = japitems.find(i => i.id === cartItem.id)
      const amount = total + (item?.price || 0) * cartItem.quantity
      total_ref.current = amount
      return amount
    }, 0)
  }
  const [remit, setRemit] = useState(calTotal)
  console.log("remit", remit)
  useEffect(() => {
    localStorage.setItem("total", JSON.stringify({total: total_ref.current}))
  }, [total_ref.current])
  return [
    <Offcanvas
      show={isOpen}
      // show={true}
      onHide={closeCart}
      placement="top"
      style={{width: "100%", height: "100%"}}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={crypto.randomUUID()} {...item} />
          ))}
          <hr />
          <div className="ms-auto font-bold text-2xl p-3">
            Total {/* TODO:total 표시 */}
            {FormatCurrency(calTotal())}
            <div>+ 기본택배 {<span>{deleiveryCost}</span>}원</div>
            <p className="text-blue-400">
              <span
                onClick={() => window.location.replace("/jap")}
                className="p-2 bg-pink-200 cursor-pointer"
              >
                택배비 없애기(공동구매 신청)
              </span>
            </p>
          </div>
        </Stack>
        <div className="flex justify-center">
          <button
            className="btn blue"
            onClick={() => handleCart__Order(cartItems)}
          >
            주문하기
          </button>
          <button className="btn red" onClick={() => handleResetCart()}>
            지우기
          </button>
          <button className="btn green" onClick={changeAddress}>
            배송지변경
          </button>
        </div>
        <div className="flex justify-center pt-2">배송지:{currentAddress}</div>
      </Offcanvas.Body>
    </Offcanvas>
  ]
}
