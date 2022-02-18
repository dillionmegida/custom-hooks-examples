import logo from "./logo.svg"
import "./App.css"
import useOnlineStatus from "./hooks/useOnlineStatus"
import { useRef } from "react"
import useClickOutside from "./hooks/useClickOutside"

function App() {
  const ref = useRef()
  const [isDivOutsideClicked, setIsDivOutsideClicked] = useClickOutside(ref)

  console.log("div is clicked outside: ", isDivOutsideClicked)

  const { online, setOnline } = useOnlineStatus()

  console.log("online: ", online)

  return (
    <div className="App">
      <div
        ref={ref}
        style={{ width: "50px", height: "50px", backgroundColor: "yellow" }}
      ></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
