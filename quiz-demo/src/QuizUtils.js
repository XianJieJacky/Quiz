import { createContext } from "react"

export const FormatAnswers = (answers, correctAnswers, correctAnswer) => {
  if (!!answers) {
    const formatted = Object.keys(answers).map(key => {
      const answer = { text: answers[key], value: key }
      answer.isAnswer = correctAnswer === null ? correctAnswers[key + '_correct'] === 'true' : correctAnswer === key
      return answer
    })

    return formatted.filter(x => x.text != null)
  }

  return []
}

export const QuizContext = createContext()