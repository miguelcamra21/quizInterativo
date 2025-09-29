import styles from "./QuestionCard.module.css"
import { questions } from "../../data/questions"
import { useState } from "react"

export default function QuestionCard({ index, onClickButton }) {
  const alternativas = questions[index].options

  return (
    <div className={styles.containerQuestion}>
      <p className="enunciado">{questions[index].question}</p>

      <div className={styles.alternativasContainer}>
        {alternativas.map((alternativa, i) => (
          <button 
            key={i} 
            className={styles.alternativaButton}
            onClick={() => onClickButton(alternativa)}
          >
            {alternativa}
          </button>
        ))}
      </div>
    </div>
  )
}

