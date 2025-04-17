import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";
import { Products } from "./pages/Products";
import Cart from "./pages/Cart";

export function AppRouter() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </BrowserRouter>
    )
}