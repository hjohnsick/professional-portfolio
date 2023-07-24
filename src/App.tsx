import "./App.css"
import { NavBar } from "./components/NavBar"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Recognition } from "./components/Recognition"

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Recognition />
    </>
  )
}

export default App
