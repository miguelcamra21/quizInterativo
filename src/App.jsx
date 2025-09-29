import { useState } from "react"
import './App.css'
import Header from './components/Header'
import QuestionCard from "./components/QuestionCard"
import { questions } from './data/questions'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <Header index={currentIndex} />
      <QuestionCard index={currentIndex} onClickButton={() => setCurrentIndex(currentIndex + 1)}/>
    </>
  )
}

export default App
