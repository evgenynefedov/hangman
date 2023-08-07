import Letter from "./letter";

function Letters({letterStatus, update}) {   
    return (
        <div className="container container-letters">
            <div>Available letters:</div>

            {Object.keys(letterStatus).map(
                l => <Letter key={"letter-" + l} letter={l} status={letterStatus[l]} update={update} />
            )}
        </div>
    );
}

export default Letters;
