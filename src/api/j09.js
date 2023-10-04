import { baseAPI } from "./base"

export function getJ09(opt) {
  return baseAPI.get("j09", opt).then((res) => res.data)
}
