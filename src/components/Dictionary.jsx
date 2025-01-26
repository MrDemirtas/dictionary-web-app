export default function Dictionary({ currentWordData, setCurrentWord }) {
  const { word, phonetic, phonetics, meanings, sourceUrls } = currentWordData;

  const wordAudioSrc = phonetics.find(x => x.audio.trim() !== "")?.audio || false;
  const audio = new Audio(wordAudioSrc);

  return (
    <div className="dictionary-contents">
      <div className="word-info">
        <div className="word-titles">
          <h1>{word}</h1>
          <h2>{phonetic}</h2>
        </div>
        <button onClick={() => audio.play()} disabled={!wordAudioSrc}>
          <svg viewBox="0 0 13 13" fill="#A445ED" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0V13L13 6.5L0 0Z" />
          </svg>
        </button>
      </div>
      <div className="meanings-contents">
        {
          meanings.map(x => (
            <>
              <div className="meanings-header">
                <h3>{x.partOfSpeech}</h3>
                <hr />
              </div>
              <p>Meaning</p>
              <ul>
                {
                  x.definitions.map((y, i) => (
                    <li key={i}>
                      {y.definition}
                      {y.example && <p>"{y.example}"</p>}
                    </li>
                  ))
                }
              </ul>
              {
                x.synonyms.length !== 0 && (
                  <div className="meanings-synonyms">
                    <span>Synonyms</span>
                    {
                      x.synonyms.map((y, i) => <button key={i} className="synonyms-btn" onClick={() => setCurrentWord(y)}>{y}</button>)
                    }
                  </div>
                )
              }
              {
                x.antonyms.length !== 0 && (
                  <div className="meanings-antonyms">
                    <span>Antonyms</span>
                    {
                      x.antonyms.map((y, i) => <button key={i} className="antonyms-btn" onClick={() => setCurrentWord(y)}>{y}</button>)
                    }
                  </div>
                )
              }
            </>
          ))
        }
        <hr />
        <div className="word-source">
          <u>Source</u>
          {
            sourceUrls.map(x => (
              <a href={x} target="_blank">
                {x}
                <img src="./link.svg" />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
}
