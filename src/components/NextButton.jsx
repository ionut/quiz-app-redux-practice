function NextButton({ dispatch, answear, index, questionsNumber }) {
    if (answear === null) return null;

    if (index < questionsNumber - 1)
        return (
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'nextQuestion', })}>Next</button>
        )

    if (index === questionsNumber - 1) {
        return (
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'finishQuiz', })}>Finish</button>
        )
    }
}

export default NextButton
