import questions from '../data/questions.js'

export default function QuizPage(props) {
    const { questionCount, setQuestionCount, setUserAnswers } = props
    const question = questions[questionCount]
    const isQuizFinished = questionCount >= questions.length
    const isLastQuestion = questionCount >= questions.length - 1
    const isFirstQuestion = questionCount === 0

    function handleForm(formData){
        const action = formData.get('action');
        const ACTIONS = {
            PREVIOUS: 'previous',
            NEXT: 'next'
        };
        const MESSAGES = {
            SELECT_ANSWER: 'Please select an answer before proceeding.'
        };

        if (action === ACTIONS.PREVIOUS) {
            setQuestionCount((prev) => prev - 1)
            setUserAnswers(prev => prev.slice(0, -1))
            return
        }

        const selectedValue = formData.get(`question${question.id}`)

        if (!selectedValue) {
            alert(MESSAGES.SELECT_ANSWER)
            return
        }

        setUserAnswers(prev => [...prev, selectedValue])

        if (!isQuizFinished) {
            setQuestionCount((prev) => prev + 1)
        }
    }


  return (
    <section className="quiz-page">
        <img src="/public/logo.png" alt="Where2Brazil Logo" className="logo" />
        <h2>{question.question}</h2>
        <form className="question-form" action={handleForm}>
            {question.options.map((option) => (
                <label key={option.value}>
                    <input type="radio" name={`question${question.id}`} value={option.value} />
                    {option.text}
                </label>
            ))}
            <div className="button-container">
                {!isFirstQuestion && <button name="action" value="previous">Previous</button>}
                <button name="action" value="next">{isLastQuestion ? 'Submit' : 'Next'}</button>
            </div>
        </form>
    </section>
  )
}