function TimeLeft(props) {
    return (
        <div>
            <h2>{props.hours}:{props.minutes}:{props.seconds}</h2>
        </div>
        
    )
}

export default TimeLeft;