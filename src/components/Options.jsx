function Options({ questions, dispatch, answear }) {

    const hasAnswered = answear !== null;

    return (
        <div className="options">
            {questions.options.map((option, index) =>
                <button key={option} className={`btn btn-option ${index === answear ? 'answer' : ''} ${hasAnswered ? index === questions.correctOption ? 'correct' : 'wrong' : ''}`} onClick={() => dispatch({ type: 'newAnswear', payload: index })} disabled={hasAnswered}>
                    {option}
                </button>
            )}
        </div>
    )
}

export default Options
