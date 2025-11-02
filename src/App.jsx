import { Routes, Route, HashRouter } from "react-router-dom";

import Goals from "./pages/Goals";
import Goal from "./pages/Goal";

import Weeks from "./pages/Weeks";
import Week from "./pages/Week";

import Stats from "./pages/Stats";
import Stat from "./pages/Stat";

import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

import Special from "./pages/Special";
import SpecialBox from "./pages/SpecialBox";

import Homepage from "./pages/Homepage";
import NavBar from "./components/Layout/NavBar";
import ErrorPage from "./components/Errors/ErrorPage";

import { Admin } from "./pages/Admin/Admin";

import "./custom.css";
import AddPost from "./pages/Admin/AddPost";
import AddStory from "./pages/Admin/AddStory";
import UpdatePost from "./pages/Admin/UpdatePost";
import UpdateStory from "./pages/Admin/UpdateStory";

import Logs from "./pages/Admin/Logs";

import { useState } from "react";
import { UserContext } from "./context/UserContext";

import Login from "./pages/Login";

import { loadUser } from "./scripts/localStorage";
import RequireAuth from "./pages/RequireAuth";

function App() {
  const [user, setUser] = useState(loadUser);
  return (
    <UserContext value={{ user, setUser }}>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/weeks" element={<Weeks />}>
            <Route path=":id" element={<Week />}></Route>
          </Route>
          <Route path="/goals" element={<Goals />}>
            <Route path=":id" element={<Goal />}></Route>
          </Route>
          <Route path="/blogs" element={<Blogs />}>
            <Route path=":id" element={<Blog />} />
          </Route>
          <Route element={<RequireAuth role={2} />}>
            <Route path="specials" element={<Special />}>
              <Route path=":id" element={<SpecialBox />}></Route>
            </Route>
          </Route>
          <Route path="/stats" element={<Stats />}>
            <Route path=":id" element={<Stat />} />
          </Route>
          <Route element={<RequireAuth role={1} />}>
            <Route path="admin" element={<Admin />}>
              <Route path="logs" element={<Logs />}></Route>
              <Route path="add/post" element={<AddPost />}></Route>
              <Route path="add/story" element={<AddStory />}></Route>
              <Route path="update/post/:id" element={<UpdatePost />}></Route>
              <Route path="update/story/:id" element={<UpdateStory />}></Route>
            </Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </HashRouter>
    </UserContext>
  );
}

export default App;
