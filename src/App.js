import Home from "./pages/Home";





import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Route/Layout.jsx'
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";

const rou1 = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>

  </Route>
))




function App() {

  


  return (
    <>
  <RouterProvider router={rou1}></RouterProvider>
 
    </>
  );
}

export default App;
