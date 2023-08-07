function Score({score}) {

    let scoreLevel = "high"
    if(score > 50 && score < 80){
        scoreLevel = "medium"
    } else if(score < 50){
        scoreLevel = "low"
    }

    return (
        <div className="container container-score">
            Your score:<span className={scoreLevel}>{score}</span>
        </div>
    );
}

export default Score;
