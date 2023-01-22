import { createContext, useState, useContext } from "react"
import Detail from "../components/Detail"

const DetailContext = createContext({})

export function useDetail() {
  return useContext(DetailContext)
}

export function DetailContextProvider({ children }) {
  // const [detailContext, setDetailContext] = useState(false)
  const [isOpen_Detail, setIsOpen_Detail] = useState(false)

  const open_Detail = () => setIsOpen_Detail(true)
  const close_Detail = () => setIsOpen_Detail(false)

  const DetailContextValue = { isOpen_Detail, open_Detail, close_Detail }
  // const DetailContextValue = { detailContext, toggleDetailContext }

  return (
    <DetailContext.Provider value={DetailContextValue}>
      {children}
      <Detail />
    </DetailContext.Provider>
  )
}

// export const useDetail = useContext(DetailContext)
