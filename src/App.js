import React, { useContext } from "react";
import "./App.css";
import { AuthContext } from "./context/AuthContext";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const { onLogin, onLogout, unLink } = useContext(AuthContext);

  return (
    <div className="App">
      <nav
        style={{ width: "100%", padding: "2rem 0", backgroundColor: "gray" }}
      >
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
        <button onClick={() => i18n.changeLanguage("kor")}>Korean</button>

        <button id="custom-login-btn" onClick={() => onLogin()}>
        </button>
        <button id="custom-login-btn" onClick={() => onLogout()}>
        </button>
        <button id="custom-login-btn" onClick={() => unLink()}>
        </button>
      </nav>
      <header className="App-header">
        <p>{t("HomePage.Welcome")}</p>
        <p>{t("HomePage.reactApplication")}</p>
      </header>
    </div>
  );
}

export default App;
