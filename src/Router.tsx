import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import PostDetail from "./pages/PostDetail";
import Layout from "./components/Layout";
import SubLayout from "./components/SubLayout";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Route>
      <Route element={<SubLayout />}>
        <Route path="/postdetail/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  )
}

export default Router;

