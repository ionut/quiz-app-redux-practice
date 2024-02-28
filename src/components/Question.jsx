import Options from "./Options";

function Question({ questions, dispatch, answear }) {

    return (
        <section>
            <h4>{questions.question}</h4>
            <Options questions={questions} dispatch={dispatch} answear={answear} />
        </section>
    )
}

export default Question
