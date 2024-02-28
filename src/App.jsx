
import { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Loader from './components/Loader'
import Error from './components/Error'
import StartScreen from './components/StartScreen'
import Question from './components/Question'
import NextButton from './components/NextButton'
import Progress from './components/Progress'
import FinishScreen from './components/FinishScreen'
import Footer from './components/Footer'
import Timer from './components/Timer'

const SECONDS_PER_QUESTION = 30

const initialState = {
  questions: [],
  // 'loading','error','ready','active','finished'
  status: 'loading',
  index: 0,
  answear: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null
}

function reducer(state, action) {
  const currentQuestion = state.questions.at(state.index);
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'dataFailed':
      return { ...state, status: 'error' }
    case 'start':
      return { ...state, status: 'active', secondsRemaining: state.questions.length * SECONDS_PER_QUESTION }
    case 'newAnswear':
      return { ...state, answear: action.payload, points: action.payload === currentQuestion.correctOption ? state.points + currentQuestion.points : state.points }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answear: null }
    case 'finishQuiz':
      return { ...state, status: 'finished', highScore: state.points > state.highScore ? state.points : state.highscore }
    case 'restartQuiz':
      return { ...initialState, questions: state.questions, highScore: state.highScore, status: 'ready' }
    case 'tick':
      return { ...state, secondsRemaining: state.secondsRemaining - 1, status: state.secondsRemaining === 0 ? 'finished' : state.status }
    default:
      throw new Error("Action unknown")
  }
}

function App() {
  const [{ questions, status, index, answear, points, highScore, secondsRemaining }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('http://localhost:2000/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(() => dispatch({ type: 'dataFailed' }))
  }, [])

  const questionsNumber = questions.length;
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0)
  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen questionsNumber={questionsNumber} dispatch={dispatch} />}
        {status === 'active' &&
          <>
            <Progress questionsNumber={questionsNumber} index={index} points={points} maxPoints={maxPoints} answear={answear} />
            <Question questions={questions[index]} dispatch={dispatch} answear={answear} />
          </>}
        {status === 'finished' && <FinishScreen points={points} maxPoints={maxPoints} highScore={highScore} dispatch={dispatch} />}
      </Main>
      <Footer>

        {status === 'active'
          &&

          <>
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
            <NextButton dispatch={dispatch} answear={answear} questionsNumber={questionsNumber} index={index} />
          </>
        }
      </Footer>
    </div>
  )
}

export default App
