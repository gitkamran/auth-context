import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import AboutUs from "./pages/AboutUs";
import AuthLayout from "./pages/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<AuthLayout />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
