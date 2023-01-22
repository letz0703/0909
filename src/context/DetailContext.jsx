import { createContext, useState, useContext } from "react"
import Detail from "../components/Detail"

const DetailContext = createContext({})

export function useDetail() {
  return useContext(DetailContext)
}

export function DetailContextProvider({ children }) {
  // const [detailContext, setDetailContext] = useState(false)
  const [isOpen_Detail, setIsOpen_Detail] = useState(false)
  // const toggleDetailContext = () => {
  // setDetailContext((prev) => !prev)
  // }

  const openDetail = () => setIsOpen_Detail(true)
  const closeDetail = () => setIsOpen_Detail(false)

  const DetailContextValue = { isOpen_Detail, openDetail, closeDetail }
  // const DetailContextValue = { detailContext, toggleDetailContext }

  return (
    <DetailContextContext.Provider value={DetailContextValue}>
      {children}
      <Detail isOpen_Detail={true} />
    </DetailContextContext.Provider>
  )
}

// export const useDetail = useContext(DetailContext)
