import {createContext, useState, useContext} from "react"
import FakeYoutube from "../api/fakeYoutube"
import Youtube from "../api/youtube"

export const YoutubeApiContext = createContext()

const youtube = new FakeYoutube()
// const youtube = new Youtube()

export function YoutubeApiProvider({children}) {
  return (
    <YoutubeApiContext.Provider value={{youtube}}>
      {children}
    </YoutubeApiContext.Provider>
  )
}

export const useYoutubeApi = () => useContext(YoutubeApiContext)
