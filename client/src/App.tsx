import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import { Home } from "./components/Home"
import Layout from "./components/Layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
