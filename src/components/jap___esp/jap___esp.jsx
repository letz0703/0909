import { useState, useEffect } from "react"
import { useAuthContext } from "../../context/AuthContext"
import { ref, get, child } from "firebase/database"
import { database } from "../../api/firebase"
import Wait from "../../util/wait"

export default function JapEsp() {
  let JapEsp = "jap___esp.jsx"
  const [state, setState] = useState({})
  /**
   * 1. 불러온다. 리얼타임 데이터 베이스를
   * 2. 뿌린다. map
   * 3. 뭘? 주문내역(이름, 전화번호, 주문제품이름, 주소, 통관번호, 사서함 번호= 전화번호 끝자리)
   * 4. 입금확인 후
   * 5. 배송한다. 후update DeliveryInfo)
   * 6. 배송완료 표기
   * 7. 통관체크 및 재주문 가능하게 만들기
   */

  /** 1. 리얼타임 rdb
   * jorders
   * get(ref, user's uid)
   * data.map(row=>row.uid)
   */
  const { user } = useAuthContext()

  const [jorderList, setJorderList] = useState(() => {
    read_rdb_jorders()
  })

  async function read_rdb_jorders() {
    return get(ref(database, "customers/jorders"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          setJorderList([{ ...data }])
        }
      })
      .catch((error) => alert(error))
  }

  return (
    <div className="jap___esp">
      <p>letz go!!</p>
      {console.log(jorderList)}
      {jorderList?.map((r) => (
        <div key={crypto.randomUUID()}>
          name: <span>{r.name}</span>
          cell: <span>{r.cell}</span>
          product: <span>{r.product}</span>
          개인통관번호: <span>{r.customNo}</span>
          주문일: <span>{r.orderDate}</span>
          배송여부: <span>{r.delivery}</span>
        </div>
      ))}

      {/* <style>{`
				.jap___esp {
					background-color: powderblue; color: black
				}
			`}</style> */}
    </div>
  )
}
