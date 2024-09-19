
import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopBar from './components/TopBar'
import WelcomePage from './pages/WelcomePage'
import NewsPage from './pages/NewsPage'
import ArticlePage from './pages/ArticlePage'

function App() {

  return (
    <>
      <TopBar />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/article' element={<ArticlePage />} />
      </Routes>


    </>
  )
}

export default App
