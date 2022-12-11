import { Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"
import { FormatAnswers, QuizContext } from "./QuizUtils"

export function Quiz({ quiz, onAnswerClick, selectedAnswers }) {
  const [selectedAnswer, setSelectedAnswer] = useState([])
  const onCheckboxClick = (e) => {
    let answers = [...selectedAnswer]
    answers = answers.filter(x => x !== e.target.value)
    if (e.target.checked)
      answers.push(e.target.value)

    setSelectedAnswer(answers)
    onAnswerClick(answers)
  }

  const onRadioClick = (e) => {
    const answers = [e.target.value]
    setSelectedAnswer(answers)
    onAnswerClick(answers)
  }

  return (
    <QuizContext.Consumer>
      {isFinish =>
        <FormControl style={{ background: 'grey', padding: 20, borderRadius: 10, margin: 5, width: '100%' }}>
          <label>{quiz.question}</label>
          {
            quiz.multiple_correct_answers === 'true' ?
              FormatAnswers(quiz.answers, quiz.correct_answers, quiz.correct_answer).map((answer, index) => {
                return <FormControlLabel key={index} label={answer.text} style={{ color: isFinish && answer.isAnswer ? 'green' : 'default' }} control={!!selectedAnswers ? <Checkbox value={answer.value} onClick={onCheckboxClick} checked={selectedAnswers?.find(x => x === answer.value) != null} /> : <Checkbox value={answer.value} onClick={onCheckboxClick} />} />
              })
              :
              <RadioGroup>
                {
                  FormatAnswers(quiz.answers, quiz.correct_answers, quiz.correct_answer).map((answer, index) => {
                    return <FormControlLabel key={index} label={answer.text} style={{ color: isFinish && answer.isAnswer ? 'green' : 'default' }} control={!!selectedAnswers ? <Radio name={index + ''} value={answer.value} onClick={onRadioClick} checked={selectedAnswers?.find(x => x === answer.value) != null} /> : <Radio name={index + ''} value={answer.value} onClick={onRadioClick} />} />
                  })
                }
              </RadioGroup>
          }
        </FormControl>
      }
    </QuizContext.Consumer>
  )
}