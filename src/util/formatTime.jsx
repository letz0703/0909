import moment from "moment-timezone"

const getCurrentTime = () => {
  var m = moment().tz("Asia/Seoul") // ← 이곳이 포인트
  return m.format("YYYY-MM-DD HH:mm:ss")
}

export default function FormatTIME(time) {
  var m = moment().tz("Asia/Seoul") // ← 이곳이 포인트
  return m.format("ddd, YY/MM/DD HH:mm")
  // return m.format("YYYY-MM-DD HH:mm:ss")
  // console.log(getCurrentTime())	// return m.format("YYYY-MM-DD HH:mm")
}
