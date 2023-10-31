import { baseAPI } from "./base"

export function getJ09(opt) {
  return baseAPI.get("j09.json", opt).then((res) => res.data)
}
