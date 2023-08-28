import { Offcanvas, Stack } from "react-bootstrap"
import { CiTwitter } from "react-icons/ci"
import { useShoppingCart } from "../context/ShoppingCartContext"
import FormatCurrency from "../util/formatCurrency"
import CartItem from "./CartItem"
import { useLocalStorage } from "../hooks/use-local-storage"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRef, useState } from "react"
import { useEffect } from "react"

const deleiveryCost = parseInt(4000)

import {
  auth,
  addNewCart,
  updateRDB_user,
  getRDB_user,
  updateCartTotal,
  setRDB_user,
} from "../api/firebase"

export function PopCart({ isOpen }) {
  const [total, setTotal] = useState(0)
  //const [japitems] = useJapitems()
  const { closeCart, cartItems, getTotal } = useShoppingCart()
  const [local__icCart, setCartItems] = useLocalStorage("ic-cart", {
    ...cartItems,
  })
  const [user] = useAuthState(auth)

  const [currentAddress, setCurrentAddress] = useState("배송지 요망")
  const [phoneNumber, setPhoneNumber] = useState("연락처요함")
  useEffect(() => {
    // Combine redundant useEffect calls
    const a = localStorage.getItem("addressTo")
    setCurrentAddress(a || "배송지 요망")
    const phone = localStorage.getItem("phoneNumber")
    setPhoneNumber(phone || "연락처 요망")
  }, []) // Empty dependency array, runs only once

  //useEffect(() => {
  //  const a = localStorage.getItem("phoneNumber")
  //  setPhoneNumber(a)
  //  if (a) {
  //    setPhoneNumber(a)
  //  } else {
  //    setPhoneNumber("연락처 요망")
  //  }
  //}, [localStorage.phoneNumber])
  /**
   * 카트 주문 처리
   */
  useEffect(() => {
    setTotal(getTotal())
    updateCartTotal(total)
  }, [cartItems])

  const handleCart__Order = async (cartItems) => {
    const a = localStorage.getItem("ic-user")
    const parsed_a = JSON.parse(a)
    setRDB_user(parsed_a.uid, parsed_a)
    await addNewCart(
      user.uid,
      crypto.randomUUID(),
      cartItems,
      currentAddress,
      phoneNumber,
      total
    )

    /**
     * 카트 비우기
     */
    setCartItems([])
    //window.location.replace("./shop")
    window.history.back()
  }
  function handleResetCart() {
    setCartItems([])
    window.location.replace("/shop")
  }

  function changeAddress() {
    const newAddress = prompt("배송지 입력")
    localStorage.setItem("addressTo", JSON.stringify(newAddress))
    updateRDB_user(newAddress)
    setCurrentAddress(newAddress)
    if (newAddress != "") {
      alert("주소가 변경되었습니다")
    }
  }

  function changeNumber() {
    const newPhoneNumber = prompt("전화번호 입력")
    localStorage.setItem("phoneNumber", JSON.stringify(newPhoneNumber))

    setPhoneNumber(newPhoneNumber)
    updateRDB_user(phoneNumber)
    if (phoneNumber != "") {
      alert("전화번호가 변경되었습니다")
    }
  }

  //useEffect(() => {
  //  getRDB_user()
  //}, [user])

  // local storage 에 sendTo 가 있는지 확인 한다 ai__
  useEffect(() => {
    const json_icCart = localStorage.getItem("ic-cart")
    if (json_icCart) {
      const { sendTo } = JSON.parse(json_icCart)
      setCurrentAddress(sendTo || "배송지 없음")
    } else {
      setCurrentAddress("배송지 없음")
      localStorage.setItem("ic-user", JSON.stringify(""))
    }
  }, [user])

  const [remitems, setRemitems] = useState(() => {
    return JSON.parse(localStorage.getItem("ic-cart"))
  })
  useEffect(() => {
    remitems && updateCartTotal(cartItems)
  }, [remitems])

  function calTotal() {
    const totalAmount = remitems?.reduce((acc, item) => {
      return acc + item.amount
    }, 0)
    return totalAmount
  }

  const loc_total = localStorage.getItem("total")

  const [totalAmountToPay, setTotalAmountToPay] = useState(() => {
    return localStorage.getItem("total")
  })

  const setTotalAmount = () => {
    localStorage.setItem("total", JSON.stringify({ total: calTotal() }))
    setTotalAmountToPay(calTotal())
  }

  useEffect(() => {
    setTotalAmount()
  }, [loc_total])

  useEffect(() => {
    const a = getRDB_user(user?.uid).deliveryTo
  }, [])

  return [
    <Offcanvas
      //show unshow
      show={isOpen}
      //show={true}
      onHide={closeCart}
      placement="top"
      style={{ width: "100%", height: "100%" }}
    >
      <Offcanvas.Header closeButton>
        {" "}
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            /** * 카트아이템 */
            //<CartItem key={crypto.randomUUID()} {...item} />
            <CartItem key={item.id} {...item} />
          ))}
          <hr />
          <div className="ms-auto font-bold text-2xl p-3">
            {FormatCurrency(getTotal())}
            <div>+ 기본택배 {<span>{deleiveryCost}</span>}원</div>
            {/*<p className="text-blue-400"><span onClick={() => window.location.replace("/jap")} className="p-2 bg-pink-200 cursor-pointer" >
                택배비 없애기(공동구매 신청) </span></p>*/}
          </div>

          <hr />
          <div className="ml-auto">
            <div>
              주문 후 문자 주시면 확인 후 입금 안내 드립니다: 010.9876.1815{" "}
            </div>
            <div>
              {" "}
              궁금한 점은 트윗 부탁 드립니다{" "}
              <button
                onClick={() =>
                  window.location.replace("https://twitter.com/icanmart")
                }
              >
                <CiTwitter className="text-blue-500 border-2 text-2xl" />
              </button>
            </div>
            <div>전화는 못받는 경우가 많으니 문자 부탁드립니다.</div>
          </div>
        </Stack>
        <div className="flex justify-center">
          <button
            className="btn blue"
            onClick={() => handleCart__Order(cartItems)}
          >
            {" "}
            주문하기{" "}
          </button>
          <button className="btn red" onClick={() => handleResetCart()}>
            주문삭제{" "}
          </button>
        </div>
        <div className="flex justify-center items-center pt-2">
          {" "}
          배송지:{currentAddress}{" "}
          <button className="btn green h-[1.8em]" onClick={changeAddress}>
            {" "}
            수정{" "}
          </button>{" "}
        </div>
        <div className="flex justify-center items-center pt-2">
          {" "}
          연락처:{phoneNumber}{" "}
          <button className="btn green h-[1.8em]" onClick={changeNumber}>
            {" "}
            수정{" "}
          </button>{" "}
        </div>
        <style>
          {`
            //body { background-color: powderblue; color: black }
            .btn { display: inline-block;
                transition: all .5s ease-in-out;
            }
            .btn.red {
              color: black;
            }
            .btn:hover {
              background: white;
              color: #c10002;
            }
            `}
        </style>
      </Offcanvas.Body>
    </Offcanvas>,
  ]
}
