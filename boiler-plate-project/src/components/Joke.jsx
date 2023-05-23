function Joke(props){
    if (props.punchline === undefined){
        return (
        <div className="joke-container">
            <div className="joke-punchline">{props.punchline}</div>
        </div>
        )
    }
    return(
        <div className="joke-container">
            <div className="joke-setup">{props.setup}</div>
            <div className="joke-punchline">{props.punchline}</div>
        </div>
    )
}

export default Joke