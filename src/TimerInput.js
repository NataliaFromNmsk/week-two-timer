function TimerInput(props) {
    return (
        <div>
            <h2>Введите число секунд</h2>
            <input value={props.seconds} onChange={props.onChangeEvent} type="number" placeholder='Введите число секунд'  required />
        </div>
        
    )
}

export default TimerInput

