import { useState, useEffect } from "react"
import './App.css'
import Header from './components/Header'
import QuestionCard from "./components/QuestionCard"
import { questions } from './data/questions'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [time, setTime] = useState(0)
  
  useEffect(() => {
    setTime(0)
    const interval = setInterval(() => {
      setTime((temp) => temp + 1)
  }, 1000)

  return () => clearInterval(interval)
  }, [currentIndex])


  return (
    <>
      <Header index={currentIndex} time={time} />
      <QuestionCard index={currentIndex} onClickButton={() => setCurrentIndex(currentIndex + 1)}/>
    </>
  )
}

export default App
