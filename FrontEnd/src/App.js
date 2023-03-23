import MainLayout from "./pages/MainLayout";
import { Routes, Route } from "react-router-dom";
import AboutLayout from "./pages/AboutLayout";
import FaqLayout from "./pages/FaqLayout";
import AdminLogin from "./pages/AdminLogin";
import { useState } from "react";
import AdminLayout from "./pages/AdminLayout";

const App = () => {
  // const [adminControl, setAdminControl] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="/About" element={<AboutLayout />}></Route>
      <Route path="/Faq" element={<FaqLayout />}></Route>
      <Route path="/AdminLogin" element={<AdminLogin />}></Route>
      <Route path="/Admin" element={<AdminLayout />}></Route>
    </Routes>
  );
};
export default App;
