import React from "react";
import { navitems } from "../constants";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <img src="./logo.svg" alt="" />

          <ul>
            {navitems.map((item, index) => (
              <li key={index}>
                <a href={`/${item}`}>{item}</a>
              </li>
            ))}
          </ul>

          <div className="flex-center gap-3">
            <button>
              <img src="./search.svg" alt="" />
            </button>
            <button>
              <img src="/cart.svg" alt="" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
