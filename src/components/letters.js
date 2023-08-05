import Letter from "./letter";

function Letters() {
    const letters = ['a', 'b', 'c', 'd']

    return (
        <div className="container container-letters">
            <div>Available letter:</div>
            {letters.map(l => <Letter letter={l} /> )}
        </div>
    );
}

export default Letters;
