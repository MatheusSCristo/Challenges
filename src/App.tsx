import { Bar } from "./Components/Bar/Bar"
import "./App.css"
import ImageBox from "./Components/ImageBox/ImageBox"
import ProductsBox from "./Components/ProductsBox/ProductsBox"
const App = () => {
  return (
    <div className="wrapper">
      <Bar />
      <ImageBox/>
      <ProductsBox/>
    </div>
  )
}

export default App