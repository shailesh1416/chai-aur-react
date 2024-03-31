import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvoder from "./context/UserContextProvoder"
import './App.css'
import './index.css'

function App() {

  return (
    <UserContextProvoder>
     <h1 className="text-center">React with chai</h1>
     <Login/>
     <Profile/>
    </UserContextProvoder>
  )
}

export default App
