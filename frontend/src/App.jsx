import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import User from "./components/user/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
