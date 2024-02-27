function Options({ questions, dispatch, answear }) {

    return (
        <div className="options">
            {questions.options.map((option, index) => <button key={option} className={`btn btn-option ${index === answear ? 'answer' : ''} ${index === questions.correctOption ? 'correct' : 'wrong'}`} onClick={() => dispatch({ type: 'newAnswear', payload: index })} disabled={answear !== null}>{option}</button>)}
        </div>
    )
}

export default Options
