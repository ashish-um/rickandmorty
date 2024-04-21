import React from "react";
import { useState } from "react";
function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch(true);
  };

  return (
    <nav className="navbar">
      <div className="homeNav">
        <a href="/">Home</a>
      </div>
      <ul>
        {showSearch && (
          <li>
            <form action="/search">
              <input type="text" name="q" />
            </form>
          </li>
        )}

        <li>
          <button onClick={handleShowSearch}>
            <i className="bx bx-search"></i>
          </button>
        </li>
        <li style={{ flexShrink: "0" }}>
          <a href="/">All Characters</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
