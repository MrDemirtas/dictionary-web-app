import { useEffect, useState } from "react";

export default function Header({ currentFontFmly, setFontFmly }) {
  const [darkMode, setDarkMode] = useState(localStorage.theme === "true" ? true : false);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  
    useEffect(() => {
      localStorage.theme = darkMode;
      if (darkMode) {
        document.body.classList.add("dark-mode");
      }else{
        document.body.removeAttribute("class");
      }
    }, [darkMode]);

    function handleChangeFontFamily(fontFamily) {
      setFontFmly(fontFamily);
      setDropDownMenu(false);
    }
  
  return (
    <header>
      <figure>
        <img src="./book.svg" alt="" />
      </figure>
      <div className="header-interactions">
        <div className="change-font-family-contents">
          <button className="current-font-family" onClick={() => setDropDownMenu(!dropDownMenu)}>
            {currentFontFmly}
            <img src="./dropdownarrow.svg" />
          </button>
          {
            dropDownMenu && (
              <div className="options-font-family">
                <button onClick={() => handleChangeFontFamily("sans-serif")}>Sans Serif</button>
                <button onClick={() => handleChangeFontFamily("serif")}>Serif</button>
                <button onClick={() => handleChangeFontFamily("monospace")}>Mono</button>
              </div>
            )
          }
        </div>
        <label className="theme-switch">
          <input className="switch" type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <img src="./moon.svg" />
        </label>
      </div>
    </header>
  );
}
