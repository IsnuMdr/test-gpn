import { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { getCurrentUser, login, logout, parseJwt } from "./utils/auth";
import { ThemeProvider } from "./contexts/ThemeContext";

import "./assets/style.css";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState("");
  const [showSidebarMobile, setShowSidebarMobile] = useState(false);
  const [dataUser, setDataUser] = useState(null);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const root = document.getElementsByTagName("html")[0];

    if (theme === "dark") {
      root.classList.add("theme-dark");
    } else {
      root.classList.remove("theme-dark");
    }
  }, [theme]);

  const onLogin = async (adminpetugasusername, password) => {
    await login(adminpetugasusername, password)
      .then((res) => {
        setDataUser(res.data);
        setLoggedIn(true);
      })
      .catch((error) => {
        setLoggedIn(false);
      });
  };

  useEffect(() => {
    const isLoggedIn = getCurrentUser();
    if (isLoggedIn !== null) {
      if (isLoggedIn.expires_in * 1000 < Date.now()) {
        setLoggedIn(false);
        logout();
        navigate("/");
      } else {
        setLoggedIn(true);
        setDataUser(JSON.parse(isLoggedIn));
      }
    } else {
      setLoggedIn(false);
    }

    const prevTheme = localStorage.getItem("theme");
    setTheme(prevTheme);

    const root = document.getElementsByTagName("html")[0];

    if (prevTheme === "dark") {
      root.classList.add("theme-dark");
    } else {
      root.classList.remove("theme-dark");
    }
  }, []);

  return (
    <ThemeProvider
      value={{
        theme: theme,
        toggleTheme: () => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
          localStorage.setItem("theme", theme);
        },
      }}
    >
      {loggedIn ? (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          <Sidebar showSidebarMobile={showSidebarMobile} />
          <div className="flex flex-col flex-1 w-full">
            <Navbar
              dataUser={dataUser}
              setShowSidebarMobile={setShowSidebarMobile}
            />
            <Routes>
              <Route
                path="/"
                element={
                  loggedIn ? (
                    <Navigate to="/home" />
                  ) : (
                    <HomePage dataUser={dataUser} />
                  )
                }
              />
              <Route path="/home" element={<HomePage dataUser={dataUser} />} />
              <Route
                path="/profile"
                element={<ProfilePage dataUser={dataUser} />}
              />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
          <Routes>
            <Route
              path="/"
              element={
                loggedIn ? <Navigate to="/" /> : <LoginPage onLogin={onLogin} />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
