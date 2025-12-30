import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 1; i <= length; i++) {
      if(numberAllowed) str += "0123456789";
      if(charAllowed) str += "!@$%^&*-+/_{}[]";

      let char = Math.floor((Math.random() * str.length) + 1);
      pass += str.charAt(char);
    };

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => passwordGenerator(), [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className='w-full shadow-lg rounded-3xl px-4 py-2 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white mb-5'>Password Generator</h1>

      <div className='flex shadow-lg rounded-xl gap-2 overflow-hidden mb-5'>
        <input
         type="text"
         value={password}
         placeholder='Password'
         className='w-100 rounded-xl shadow-lg px-4 py-2 outline-none bg-white'
         ref={passwordRef}
         readOnly 
         />
        <button onClick={copyToClipboard} type='button' className='bg-blue-700 text-white px-4 py-2 rounded-xl shrink-0'>Copy</button>
      </div>

      <div className="flex text-md gap-x-5">

        <div className="flex items-center gap-1 mb-2">
          <input 
            type="range"
            min={6}
            max={100} 
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
          <label className='font-bold'>Length: {length}</label>
        </div>
        
        <div className="flex items-center gap-1 mb-2">
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            className='cursor-pointer'
            id='numberInput'
            onChange={() => setNumberAllowed((prev) => !prev)}
            />
          <label className='font-bold'>Number</label>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <input 
            type="checkbox"
            className='cursor-pointer'
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => setCharAllowed((prev) => !prev)}
            />
          <label className='font-bold'>Character</label>
        </div>

      </div>

    </div>
  )
}

export default App
