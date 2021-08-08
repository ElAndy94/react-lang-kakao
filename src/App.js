import logo from "./logo.svg";
import "./App.css";

import { useTranslation } from "react-i18next";

function App() {
  const { t, il8n } = useTranslation();
  return (
    <div className="App">
      <nav
        style={{ width: "100%", padding: "2rem 0", backgroundColor: "gray" }}
      >
        <button onClick={() => il8n.changeLanguage("en")}>English</button>
        <button onClick={() => il8n.changeLanguage("kor")}>Korean</button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("Welcome to React")}</p>
      </header>
    </div>
  );
}

export default App;
