import MyNavbar from "../components/MyNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";

import PrivateRouter from "./PrivateRouter";
import BlockCard from "../components/BlockCard";


const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/new-blog" element={<NewBlog/>} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<BlockCard />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;
