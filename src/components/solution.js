function Solution({solution}) {
    return (
        <div className="container container-solution">
            {solution.map(l => <span>{l}</span>)}
        </div>
    );
}

export default Solution;
