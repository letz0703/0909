import JorderQuery from "../components/jorder-special/jorder-special"
import Products from "../components/Products"
import SearchInput from "../components/search-input/search-input"
import Slide from "../components/slide/slide"
import Store from "./Store"

export default function ShopHome() {
  return (
    <div className="shopHome">
      <Slide />
      <Products />
      {/* <style>{`
        .shopHome{
          min-height: 100vh;
          min-height: 100dvh;
          display: grid;
          grid-template-rows: auto 1fr auto;
        }
      `}</style> */}
    </div>
  )
}
