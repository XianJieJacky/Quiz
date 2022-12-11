import { Button, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TabPanel from "./components/TabPanel"
import { Quiz } from "./Quiz"
import { QuizContext } from "./QuizUtils"

export default function History({ histories }) {
  const [selectedTab, setSelectedTab] = useState(0)

  const navigate = useNavigate()
  const handelTabChange = (e, newVal) => {
    setSelectedTab(newVal)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {histories.length > 0 ?
        <div>
          <Tabs value={selectedTab} onChange={handelTabChange}>
            {histories.map((history, index) => <Tab key={index} label={`Attempt ${history.attempt}`} id={`simple-tab-${index}`} aria-controls={`simple-tabpanel-${index}`} />)}
          </Tabs>

          <QuizContext.Provider value={true}>
            {histories.map((history, index) => {
              return (
                <TabPanel key={index} value={selectedTab} index={index}>
                  <p>Category: {history.category}</p>
                  <p>Score: {history.correctCount}/{history.quizDetail.length}</p>
                  {
                    history.quizDetail.map((quiz, index) => <Quiz key={index} onAnswerClick={() => { }} quiz={quiz} selectedAnswers={history.selectedAnswers[index]} />)
                  }
                </TabPanel>)
            }
            )}
          </QuizContext.Provider>
        </div>
        :
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h1>No history yet</h1>
        </div>
      }
      <Button color={'warning'} onClick={() => navigate('/')}>Back to home</Button>
    </div>
  )
}