function Progress({ index, questionsNumber, points, maxPoints, answear }) {

    return (
        <section className="progress">
            <progress value={index + Number(answear !== null)} max={questionsNumber}></progress>
            <p>Question <strong>{index + 1}</strong>/{questionsNumber}</p>
            <p><strong>Points</strong>:{points}/{maxPoints}</p>
        </section>
    )
}

export default Progress
