import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import History from './History'
import { LandingPage } from './LandingPage'
import QuizForm from './QuizForm'

export default function Router() {

  const [quizHistory, setQuizHistory] = useState([])
  const onFinish = (quizDetails) => {
    const histories = [...quizHistory]
    quizDetails.attempt = histories.length + 1
    histories.push(quizDetails)
    setQuizHistory(histories)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizForm onFinish={onFinish} />} />
        <Route path="/history" element={<History histories={quizHistory} />} />
      </Routes>
    </BrowserRouter>
  )
}