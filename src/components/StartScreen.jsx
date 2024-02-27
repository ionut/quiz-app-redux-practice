function StartScreen({ questionsNumber, dispatch }) {
    return (
        <div>
            <h2>Welcome to React Quiz</h2>
            <h3>{questionsNumber} questions to test your react mastery</h3>
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'start' })}>Lets start!</button>
        </div>
    )
}

export default StartScreen
