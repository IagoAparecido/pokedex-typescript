import "./style.css";

import { BsSearch } from "react-icons/bs";

function Header({ pokemonFilter }: any) {
  return (
    <header className="header">
      <div>
        <img src="../../pokemon-logo.png" alt="" />
        <form>
          <input type="text" onChange={(e) => pokemonFilter(e.target.value)} />
          <button disabled className="button">
            <BsSearch />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
