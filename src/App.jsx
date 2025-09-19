import { useState } from 'react'
import './App.css'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage.jsx'
import ResultPage from './pages/ResultPage.jsx'
import questions from './data/questions.js'

function App() {
  const [showStartPage, setShowStartPage] = useState(true)
  const [questionCount, setQuestionCount] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const isQuizFinished = questionCount >= questions.length
  
  return (
    <>
      <main>
        {showStartPage ? (
          <StartPage 
            toggleStartPage={() => setShowStartPage(false)}
          />
        ) : !isQuizFinished ? (
          <QuizPage 
          questionCount={questionCount}
          setQuestionCount={setQuestionCount}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          />
        ) : (
          <ResultPage
            userAnswers={userAnswers}
          />
        )}
      </main>
    </>
  )
}

export default App
