function EndGame({win}) {
    return (
        <div className={"container " + (win ? "win" : "gameover")}>
            {win ? "Congrats!" : "Game over!"}
        </div>
    );
}

export default EndGame;
