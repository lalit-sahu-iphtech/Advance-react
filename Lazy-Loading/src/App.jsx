import {Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./components/Loader"

// Lazy load components

const Home = lazy(()=>import("./pages/Home"));
const Dashboard = lazy(()=>import("./pages/Dashboard"))
const Products = lazy(()=>import("./pages/Products"))
const Students = lazy(()=>import("./pages/Students"))


function App() {
  return (
    <>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/students" element={<Students/>}/>

      </Routes>

    </Suspense>

    </>
  )
}

export default App
