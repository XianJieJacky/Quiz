import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { fetchQuiz } from "./Api"
import { Quiz } from "./Quiz"
import { FormatAnswers, QuizContext } from "./QuizUtils"

export default function QuizForm({ onFinish }) {
  const location = useLocation()
  const [quiz, setQuiz] = useState([])
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [isFinish, setIsFinish] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  useEffect(() => {
    fetchQuiz(location.state.category)
      .then(result => {
        //setQuiz([{"id":1046,"question":"Which command will you use to test the connectivity to the host from the master server and make sure that it actually works?","description":null,"answers":{"answer_a":"ansible your_host_name_here -m pong","answer_b":"ansible your_host_name_here -m connect","answer_c":"ansible your_host_name_here -m try","answer_d":"ansible your_host_name_here -m ping","answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"true","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"DevOps"}],"category":"DevOps","difficulty":"Easy"},{"id":1039,"question":"With Ansible you can only use SSH key as it does not work with SSH password.","description":"You could either use SSH keys or you could use the -k argument and use SSH password instead.","answers":{"answer_a":"true","answer_b":"false","answer_c":null,"answer_d":null,"answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"true","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"DevOps"}],"category":"DevOps","difficulty":"Easy"},{"id":1035,"question":"Which of the following commands will install Ansible on Ubuntu?","description":null,"answers":{"answer_a":"sudo apt install ansible","answer_b":"sudo apt install ansible-controller","answer_c":"sudo apt install ansible-master","answer_d":"sudo apt install ansible-server","answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"true","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"DevOps"}],"category":"DevOps","difficulty":"Easy"},{"id":1051,"question":"Ansible playbooks are the basis for a really simple configuration management and multi-machine deployment system, unlike any that already exist, and one that is very well suited to deploying complex applications.","description":null,"answers":{"answer_a":"false","answer_b":"true","answer_c":null,"answer_d":null,"answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"true","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"DevOps"}],"category":"DevOps","difficulty":"Easy"},{"id":1053,"question":"What is the Ansible setup module used for?","description":null,"answers":{"answer_a":"Gathers facts about remote hosts","answer_b":"Setup Ansible on remote hosts","answer_c":"Setup ansible on a master host","answer_d":"Setup your SSH keys","answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"true","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"DevOps"}],"category":"DevOps","difficulty":"Easy"},{"id":1040,"question":"You can also get the Ansible documentation directly via your terminal by using:","description":null,"answers":{"answer_a":"ansible-doc","answer_b":"ansible --doc","answer_c":"ansible -d","answer_d":"ansible-documentation","answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"true","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"DevOps"}],"category":"DevOps","difficulty":"Easy"},{"id":1048,"question":"The -b flag in an Ansible ad-hoc command indicates that the command should be executed with sudo privileges.","description":null,"answers":{"answer_a":"false","answer_b":"true","answer_c":null,"answer_d":null,"answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"true","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"DevOps"}],"category":"DevOps","difficulty":"Easy"},{"id":1050,"question":"Which argument will you use to specify a variable for your Ansible playbook?","description":null,"answers":{"answer_a":"-v","answer_b":"-e","answer_c":"-c","answer_d":"-a","answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"true","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"DevOps"}],"category":"DevOps","difficulty":"Easy"},{"id":1042,"question":"Ansible is an open-source agentless automation tool that enables you to easily configure and deploy systems.","description":null,"answers":{"answer_a":"true","answer_b":"false","answer_c":null,"answer_d":null,"answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"true","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"DevOps"}],"category":"DevOps","difficulty":"Easy"},{"id":1045,"question":"What does the Ansible setup module do?","description":null,"answers":{"answer_a":"It helps you setup Ansible on the master server","answer_b":"It helps you install Ansible on all of your servers","answer_c":"It shows you the information that the Ansible master server has about a host","answer_d":"It sets up the connection between the master and the worker nodes","answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"false","answer_c_correct":"true","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"DevOps"}],"category":"DevOps","difficulty":"Easy"}])
        setQuiz(result)
      })
  }, [])

  const navigate = useNavigate()

  const calculateCorrect = () => {
    const correctAnswers = quiz.map((q, index) => {
      const correctAnswers = FormatAnswers(q.answers, q.correct_answers, q.correct_answer).filter(x => x.isAnswer)
      const selectedAnswer = selectedAnswers[index] ?? []

      if (correctAnswers.length != selectedAnswer.length)
        return false

      if (correctAnswers.length === 1)
        return correctAnswers[0].value === selectedAnswer[0]

      return correctAnswers.map(correct => selectedAnswer.find(x => x === correct.value) != null).find(x => !x) == null
    })

    setCorrectCount(correctAnswers.filter(x => x).length)
    return correctAnswers.filter(x => x).length
  }

  const onAnswerClick = (quizNumber, answer) => {
    const answers = [...selectedAnswers.map(ans => !!ans ? [...ans] : [])]
    answers[quizNumber] = answer
    setSelectedAnswers(answers)
  }

  const onFinishClick = () => {
    setIsFinish(true)
    const count = calculateCorrect()
    onFinish({ category: location.state.category, quizDetail: quiz, selectedAnswers: selectedAnswers, correctCount: count })
  }

  const onBackClick = () => {
    navigate('/')
  }

  return (
    <QuizContext.Provider value={isFinish}>
      <div style={{ padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p>Category: {location.state.category}</p>
        <table>
          <tbody>
            {quiz &&
              quiz.map((q, index) =>
                <tr key={index}>
                  <td>
                    <Quiz quiz={q} onAnswerClick={(answer) => onAnswerClick(index, answer)} />
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        {isFinish && <label>Your score: {`${correctCount}/${quiz.length}`}</label>}
        {isFinish && <Button color={'warning'} style={{ margin: 20 }} onClick={onBackClick}>Back to home</Button>}
        {!isFinish && <Button color={'success'} style={{ margin: 20 }} onClick={onFinishClick}>Finish</Button>}
      </div>
    </QuizContext.Provider>
  )
}