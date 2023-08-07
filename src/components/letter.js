function Letter({letter, status, update}) {
    return (
        <span
            className={status ? 'selected' : 'unselected'}
            {...((update === false || status) ? {} : {onClick: () => update(letter)}) }
        >{letter}</span>
    );
}

export default Letter;
