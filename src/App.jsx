import { Routes, Route, HashRouter } from "react-router-dom";

import Stats from "./components/pages/Stats";
import Stat from "./components/pages/Stat";

import Special from "./components/pages/Special";
import SpecialBox from "./components/pages/SpecialBox";

import Homepage from "./components/pages/Homepage";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/Errors/ErrorPage";

import { Admin } from "./components/pages/Admin/Admin";

import "./custom.css";
import AddPost from "./components/pages/Admin/AddPost";
import AddStory from "./components/pages/Admin/AddStory";
import UpdatePost from "./components/pages/Admin/UpdatePost";
import UpdateStory from "./components/pages/Admin/UpdateStory";

import Logs from "./components/pages/Admin/Logs";

import { useState } from "react";
import { UserContext } from "./context/UserContext";

import Login from "./components/pages/Login";

import { loadUser } from "./scripts/localStorage";

import RequireAuth from "./components/Auth/RequireAuth";
import RequireUnAuth from "./components/Auth/RequireUnAuth";

import ServerContent from "./components/pages/ServerContent";
import Content from "./components/pages/Content";

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
