import JorderQuery from "../components/jorder-special/jorder-special"
import Products from "../components/Products"
import Slide from "../components/slide/slide"
import Store from "./Store"

export default function ShopHome() {
  return (
    <div className="shopHome">
      <Products />
      <Slide className="shopHome__slide" />
      {/* <JorderQuery /> */}
      <style>{`
        .shopHome{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
