// App.js
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import DashboardHome from "./pages/dashboard/Dashboard_Home.jsx";
import AddSuperCate from "./pages/AddEdit/Super-Category/AddSuperCate.jsx";
import ListSuperCate from "./pages/AddEdit/Super-Category/ListSuperCate.jsx";
import MainLayout from "./Components/MainLayout.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}> 
          <Route index element={<DashboardHome />} />
          <Route path="/admin/super-category/add" element={<AddSuperCate />} />
          <Route path="/admin/super-category/list" element={<ListSuperCate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

