import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { GenerationPage } from './pages/GenerationPage'
import { NotFound } from './pages/NotFound'
import { DigimonPage } from './pages/DigimonPage'

function App() {
  return (
    <div>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/gen1"
            element={
              <GenerationPage
                title="Primera Generación (Gen 1)"
                minId={1}
                maxId={151}
              />
            }
          />

          <Route
            path="/gen2"
            element={
              <GenerationPage
                title="Segunda Generación (Gen 2)"
                minId={152}
                maxId={251}
              />
            }
          />

          <Route
            path="/gen3"
            element={
              <GenerationPage
                title="Tercera Generación (Gen 3)"
                minId={252}
                maxId={386}
              />
            }
          />

          <Route path="/digimon" element={<DigimonPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
