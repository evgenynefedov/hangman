import Letter from "./letter";

function Solution({solution, letterStatus}) {
    return (
        <div className="container container-solution">
            <div className="word">
                {[...solution.word].map(
                    l => <Letter
                        key={"solution-letter-" + l} 
                        letter={letterStatus[l] ? l : '-'} 
                        status={letterStatus[l]} 
                        update={false}
                    />
                )}
                </div>
            <div className="hint">Hint: {solution.hint}</div>
        </div>
    );
}

export default Solution;
