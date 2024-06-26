import Home from "./pages/Home";





import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider
} from "react-router-dom"
import Layout from './components/Route/Layout.jsx'
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Product from "./pages/Product.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Checkout from "./pages/Checkout.jsx";
import Myaccount from "./pages/Myaccount.jsx";
import Contact from "./pages/Contact.jsx";
import SearchFilterPage from "./pages/SearchFilterPage.jsx";
import Chkout from "./pages/Chkout.jsx";


let rou = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/oreby" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/shop" element={<Product/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/shop/:id" element={<ProductDetails/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
    <Route path="/myaccount" element={<Myaccount/>}></Route>
    <Route path="/contacts" element={<Contact/>}></Route>
    <Route path="/search" element={<SearchFilterPage/>}></Route>
    <Route path="/chk" element={<Chkout/>}></Route>
    <Route path="*" element={<Error/>}></Route>
    
  </Route>
))




function App() {

  


  return (
    <>
    < RouterProvider  router={rou} >    </RouterProvider>
  {/* <RouterProvider router={rou2}>
  </RouterProvider> */}
  {/* <Home/> */}
  
  
 
    </>
  );
}

export default App;
