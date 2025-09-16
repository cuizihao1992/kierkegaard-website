import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Biography from './pages/Biography'
import Philosophy from './pages/Philosophy'
import Works from './pages/Works'
import Influence from './pages/Influence'
import Quotes from './pages/Quotes'
import Resources from './pages/Resources'
import About from './pages/About'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/works" element={<Works />} />
            <Route path="/influence" element={<Influence />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
