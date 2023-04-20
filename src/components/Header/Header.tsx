import "./style.css";
import { BsSearch } from "react-icons/bs";

function Header({ children, pokemonFilter, click }: any) {
  return (
    <header className="header">
      <div>
        <a href="">
          <img src="../../pokemon-logo.png" alt="" onClick={click} />
        </a>
        <form>
          {children}
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
