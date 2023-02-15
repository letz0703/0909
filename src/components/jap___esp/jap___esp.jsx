import { useState, useEffect } from "react"
import { useAuthContext } from "../../context/AuthContext"
import { ref, get, child } from "firebase/database"
import { database } from "../../api/firebase"
import Wait from "../../util/wait"
import moment from "moment-timezone"
import FormatTime from "../../util/formatTime"

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
  const { user, isAdmin } = useAuthContext()

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

  if (isAdmin) {
    return (
      <div className="jap___esp">
        {/* <h2>Order List</h2> */}
        {jorderList?.map((r) => (
          <div
            key={crypto.randomUUID()}
            className="jap__orderList flex items-center w-100"
          >
            {console.log(r)}
            <table className="jap__esp-table">
              <thead>
                <tr>
                  <th scope="row">name</th>
                  <th>cell</th>
                  <th>product</th>
                  <th>개인통관번호</th>
                  <th>주문일</th>
                  <th>배송단계</th>
                </tr>
              </thead>
              <tfoot>
                <tr></tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>{r.name}</td>
                  <td>{r.cell}</td>
                  <td>{r.jProduct}</td>
                  <td>{r.customNo}</td>
                  <td>{FormatTime(r.orderDate)}</td>
                  <td>{r.delivery}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}

        <style>{`
      .jap___esp{
        width: 100vw;
      }
				.jap__orderList {
          width: 1fr;
          padding: 1rem;
          gap: 2em;
          margin-right: 1rem;
				}
        .jap__esp-table {
          border-collapse: collapse;
          text-align: left;
          line-height: 1.5;
          margin : 20px 10px;
        }
        .jap__esp-table th {
          width: 150px;
          padding: 10px;
          font-weight: bold;
          vertical-align: top;
          border: 1px solid #ccc;
        }
        .jap__esp-table td {
          width: 350px;
          padding: 10px;
          vertical-align: top;
          border: 1px solid #ccc;
        }
			`}</style>
      </div>
    )
  }
}
