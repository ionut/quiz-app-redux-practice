import Options from "./Options";

function Question({ questions, dispatch, answear }) {

    return (
        <div>
            <h4>{questions.question}</h4>
            <Options questions={questions} dispatch={dispatch} answear={answear} />
        </div>
    )
}

export default Question
