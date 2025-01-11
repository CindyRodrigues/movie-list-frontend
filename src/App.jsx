import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieView from './features/movies/MovieView'
import MovieForm from './features/movies/MovieForm'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MovieView />} />
          <Route path="/addMovie" element={<MovieForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
