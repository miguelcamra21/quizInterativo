import { useState, useEffect } from "react"
import './App.css'
import Header from './components/Header'
import QuestionCard from "./components/QuestionCard"
import ScoreBoard from "./components/ScoreBoard"
import { questions } from "./data/questions"

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [time, setTime] = useState(0)
  const [respostasUsuario, setRespostasUsuario] = useState([]) 
  const [telaFinal, setTelaFinal] = useState(false)

  function handleNextQuestion(respostaEscolhida) {
  const acertou = respostaEscolhida === questions[currentIndex].answer
  const pontos = acertou ? questions[currentIndex].points : 0

  setRespostasUsuario((prev) => [
    ...prev,
    {
      pergunta: questions[currentIndex].question,
      respostaEscolhida,
      respostaCorreta: questions[currentIndex].answer,
      pontos,
      tempo: time,
      acertou
    }
  ])

  setTime(0)

  if (currentIndex + 1 < questions.length) {
    setCurrentIndex((prev) => prev + 1)
  } else {
    setTelaFinal(true)
  }
}
  

useEffect(() => {
  const interval = setInterval(() => {
    setTime((temp) => temp + 1)
  }, 1000)

  return () => clearInterval(interval)
}, [currentIndex])


  return (
  <>
    {telaFinal ? (
      <ScoreBoard respostasUsuario={respostasUsuario} />
    ) : (
      <>
        <Header index={currentIndex} time={time} />
        <QuestionCard index={currentIndex} onClickButton={handleNextQuestion} />
      </>
    )}
  </>
)

}

export default App
