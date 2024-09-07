
import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopBar from './components/TopBar'
import WelcomePage from './pages/WelcomePage'
import NewsPage from './pages/NewsPage'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>


    </>
  )
}

export default App
