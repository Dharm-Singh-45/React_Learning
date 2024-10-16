import { useState, useCallback, useEffect,useRef} from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(true);
  const [pass, setPass] = useState("");
  // useRef Hook
  const passwordRef =useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]`~-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numberAllowed, charAllowed, setPass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  },[pass])

  return (
    <>
      <h1>Password Generator</h1>
      <input type="text" value={pass} placeholder="password" readOnly  ref={passwordRef}/>
      <button onClick={copyPasswordToClipboard}>Copy</button>
      <div>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Length : {length}</label>
        <div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Number is allowed</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Character is allowed</label>
        </div>
      </div>
    </>
  );
}

export default App;
