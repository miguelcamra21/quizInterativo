import styles from "./Header.module.css"
import {questions} from "../../data/questions"

export default function Header({index,time}) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

  return (
    <header>
      <h1>Quiz Interativo</h1>
      <h2>{`Questão ${questions[index].id} de ${questions.length}`}</h2>
      <h3>Tempo: {minutes}:{seconds.toString().padStart(2, "0")}</h3>
    </header>
  )
}
