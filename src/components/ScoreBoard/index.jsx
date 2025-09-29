import styles from "./ScoreBoard.module.css"
import { questions } from "../../data/questions"
import { useState } from "react"

export default function ScoreBoard({ respostasUsuario, reiniciarQuiz }) {
  const totalAcertos = respostasUsuario.filter(r => r.acertou).length
  const pontuacaoFinal = respostasUsuario.reduce((sum, r) => sum + r.pontos, 0)
  const menorTempo = Math.min(...respostasUsuario.map(r => r.tempo))
  const percentual = ((totalAcertos / respostasUsuario.length) * 100).toFixed(1)

  return (
    <div className={styles.estatisticas}>
      <h1>Quiz Interativo</h1>
      <h2>Resultados</h2>

      <div className={styles.resumo}>
        <p>Pontuação final: {pontuacaoFinal}</p>
        <p>Menor tempo de resposta: {menorTempo} segundos</p>
        <p>Total de acertos: {totalAcertos} de {respostasUsuario.length} ({percentual}%)</p>
        <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
      </div>

      <div className={styles.alternativasContainer}>
        {respostasUsuario.map((r, i) => (
          <div 
            key={i} 
            className={r.acertou ? styles.correta : styles.errada}
          >
            <p><strong>Questão {i + 1}:</strong> {r.pergunta}</p>
            <p>Resposta escolhida: {r.respostaEscolhida}</p>
            <p>Resposta correta: {r.respostaCorreta}</p>
            <p>Pontuação: {r.pontos}</p>
            <p>Tempo gasto: {r.tempo} segundos</p>
          </div>
        ))}
      </div>
    </div>
  )
}
