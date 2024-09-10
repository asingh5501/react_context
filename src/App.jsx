import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContetProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContetProvider>
      <Login />
      <Profile />
    </UserContetProvider>
  )
}

export default App
