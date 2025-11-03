import { Routes, Route, HashRouter } from "react-router-dom";

import Stats from "./pages/Stats";
import Stat from "./pages/Stat";

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
import RequireUnAuth from "./pages/RequireUnAuth";

import ServerContent from "./pages/ServerContent";
import Content from "./pages/Content";

function App() {
  const [user, setUser] = useState(loadUser);
  return (
    <UserContext value={{ user, setUser }}>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/stats" element={<Stats />}>
            <Route path=":id" element={<Stat />} />
          </Route>

          <Route element={<RequireAuth role={2} />}>
            <Route path="special" element={<Special />}>
              <Route path=":id" element={<SpecialBox />}></Route>
            </Route>
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

          <Route element={<RequireUnAuth />}>
            <Route path="login" element={<Login />}></Route>
          </Route>

          {/* Newer type id routes */}
          <Route path="/:type" element={<ServerContent />}>
            <Route path=":id" element={<Content />}></Route>
          </Route>

          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </HashRouter>
    </UserContext>
  );
}

export default App;
