import { Routes, Route, HashRouter } from "react-router-dom";
import "./custom.css";

import Homepage from "./components/pages/Homepage";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/Errors/ErrorPage";

import Admin from "./components/pages/Admin/Admin";
import Logs from "./components/pages/Admin/Logs";
import AddPost from "./components/pages/Admin/AddPost";
import AddStory from "./components/pages/Admin/AddStory";
import UpdatePost from "./components/pages/Admin/UpdatePost";
import UpdateStory from "./components/pages/Admin/UpdateStory";

import { useState } from "react";
import { UserContext } from "./context/UserContext";

import { loadUser } from "./scripts/localStorage";

import RequireAuth from "./components/Auth/RequireAuth";
import RequireUnAuth from "./components/Auth/RequireUnAuth";
import Login from "./components/pages/Login";

import ServerContent from "./components/pages/ServerContent";
import Content from "./components/pages/Content";

import LandServer from "./components/pages/LandServer";
import LandSpecial from "./components/pages/LandSpecial";
import LandStats from "./components/pages/LandStats";

import Stats from "./components/pages/Stats";
import Stat from "./components/pages/Stat";

import Special from "./components/pages/Special";
import SpecialBox from "./components/pages/SpecialBox";

function App() {
  const [user, setUser] = useState(loadUser);
  return (
    <UserContext value={{ user, setUser }}>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/stats" element={<Stats />}>
            <Route path="" element={<LandStats />} />
            <Route path="latest" element={<Stat latest={true} />} />
            <Route path=":id" element={<Stat />} />
          </Route>

          <Route element={<RequireAuth role={2} />}>
            <Route path="special" element={<Special />}>
              <Route path="" element={<LandSpecial />} />
              <Route path="latest" element={<SpecialBox latest={true} />} />
              <Route path=":id" element={<SpecialBox />} />
            </Route>
          </Route>

          <Route element={<RequireAuth role={1} />}>
            <Route path="admin" element={<Admin />}>
              <Route path="logs" element={<Logs />} />
              <Route path="add/post" element={<AddPost />} />
              <Route path="add/story" element={<AddStory />} />
              <Route path="update/post/:id" element={<UpdatePost />} />
              <Route path="update/story/:id" element={<UpdateStory />} />
            </Route>
          </Route>

          <Route element={<RequireUnAuth />}>
            <Route path="login" element={<Login />} />
          </Route>

          {/* Newer type id routes */}
          <Route path="/:type" element={<ServerContent />}>
            <Route path="latest" element={<Content latest={true} />} />
            <Route path="" element={<LandServer />} />
            <Route path=":id" element={<Content />} />
          </Route>

          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </HashRouter>
    </UserContext>
  );
}

export default App;
