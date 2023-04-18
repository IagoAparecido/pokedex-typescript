import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div>
        <img src="../../pokemon-logo.png" alt="" />
        <form>
          <input type="text" />
          <button>Pesquisar</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
