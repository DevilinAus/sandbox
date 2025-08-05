// Export Code in External Module

export default function Header() {
  return (
    <header className="header">
      <img src="react-logo.png" className="nav-logo" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

// Import Code in Main File

import { createRoot } from "react-dom/client";
import Header from "./Header";
const root = createRoot(document.getElementById("root"));
