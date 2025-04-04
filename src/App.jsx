import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (numberAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-4 my-12 py-5 text-orange-400 bg-gray-800">
        <h1 className="text-4xl text-center text-white ">Password Generator</h1>
        <div className='flex shadow rounded-xl overflow-hidden mb-4 py-5'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-4'
            placeholder='Password'
            readOnly
          />
          <button className="outline-none bg-blue-700  text-white px-3 py-.5 shrink-0">copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={8} 
              max={100}
              value={length}
              className ='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
               />
               <label >Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberAllowed"
              onChange={(prev)=>{
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
              <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox"
                  defaultChecked={charAllowed}
                  onChange={(prev)=>{
                    setCharAllowed((prev)=> !prev)
                  }}

                 />
                <label>Characters</label>
              </div>
        </div>
      </div>

    </>
  )
}

export default App
