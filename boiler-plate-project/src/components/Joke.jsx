function Joke(props){

    return(
        <div className="joke-container">
            {props.setup && <div className="joke-setup">{props.setup}</div>}
            <div className="joke-punchline">{props.punchline}</div>
        </div>
    )
}

export default Joke