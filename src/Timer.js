import { Component } from 'react';

export class Timer extends Component {
    constructor() {
    super();
    this.state = { time: {}, seconds: "" };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    }

    onChangeEvent(e) {
        this.setState ({seconds: e.target.value})
    }

    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
      let minutes = Math.floor( secs % (60 * 60) / 60);  
      let seconds = Math.ceil((secs % (60 * 60)) % 60);
    
      if (hours < 10) {
		hours = "0" + hours;
	}

      if (minutes < 10) {
		minutes = "0" + minutes;
	}

      if (seconds < 10) {
		seconds = "0" + seconds;
	}

      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };

      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer() {
      if (this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown() {
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
    
      if (seconds === 0) { 
        clearInterval(this.timer);
        alert("Время вышло!")
      }
    }
  
    render() {
      return(
        <div>
            <h2>Таймер</h2>
            <input placeholder='Введите число секунд' type="number" value={this.state.seconds} onChange={(e) => this.onChangeEvent(e.target.value)} required />
            <button onClick={this.startTimer}>Старт</button>
            <p>{this.state.time.h}:{this.state.time.m}:{this.state.time.s}</p>
        </div>
      );
    }
  }
  
export default Timer  


