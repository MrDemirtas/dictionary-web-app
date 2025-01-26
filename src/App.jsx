import { useEffect, useRef, useState } from "react";

import Dictionary from "./components/Dictionary";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {
  const [currentFontFmly, setFontFmly] = useState("sans-serif");
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordData, setCurrentWordData] = useState(null);
  const [isNotFound, setNotFound] = useState(false);
  const [showRequired, setShowRequired] = useState(false);

  
  useEffect(() => {
    if (currentWord.trim() === "") return;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }else{
          return 404;
        }
      })
      .then(response => {
        if (response !== 404) {
          setNotFound(false);
          setCurrentWordData(response[0]);
        }else{
          setCurrentWordData([]);
          setNotFound(true);
        }
      });
  }, [currentWord]);

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.word.value.trim() === "") {
      setShowRequired(true);
      return;
    }
    setShowRequired(false);
    setCurrentWord(e.target.word.value);
  }

  return (
    <div className="container" style={{ fontFamily: currentFontFmly }}>
      <Header currentFontFmly={currentFontFmly} setFontFmly={setFontFmly} />
      <form onSubmit={handleSubmit} autoComplete="off">
        <input 
          className={"search-input" + (showRequired ? " required" : "")}
          type="text" 
          name="word"
          placeholder="Search for any word…" 
        />
        {showRequired && <p>Whoops, can’t be empty…</p>}
      </form>
      {
        isNotFound ? 
          <NotFound />
          :
          currentWordData !== null && <Dictionary currentWordData={currentWordData} setCurrentWord={setCurrentWord} />
      }
    </div>
  );
}

export default App;
