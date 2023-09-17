import Header from "./containers/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductListing from "./containers/ProductListing"
import ProductDetails from "./containers/ProductDetails"
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductListing/>} />
          <Route path='/product' element={<ProductListing/>} />
          <Route path='/product/:productID' element={<ProductDetails/>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App