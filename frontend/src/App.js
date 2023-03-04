import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loaduser } from "./actions/user";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Timeline from "./components/AdminPanel/Timeline";
import Github from "./components/AdminPanel/Github";
import Project from "./components/AdminPanel/Project";
import Loader from "./components/Loader/Loader";
function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loaduser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  githubs={user.github}
                  timelines={user.timeline}
                  skills={user.skills}
                />
              }
            />
            <Route path="/about" element={<About about={user.about} />} />
            <Route
              path="/projects"
              element={<Projects projects={user.projects} />}
            />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />

            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />

            <Route
              path="/admin/github"
              element={isAuthenticated ? <Github /> : <Login />}
            />

            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
