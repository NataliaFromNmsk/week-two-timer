import TimerInput from './TimerInput';
import TimeLeft from './TimeLeft';
import StartButton from './StartButton';
import { Component } from 'react';

export class TimerTwo extends Component {
    constructor(props) {
    super(props);
    this.state = { time: {}, seconds: ""};
    this.timer = 0;
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    }

    onChangeEvent(e) {
        this.setState ({seconds: e.target.value})
        console.log(e)
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

    handleStartTimer() {
      if (this.state.seconds === 0) {   
        alert("Введите время!");
      }

      if (this.timer === 0 && this.state.seconds < 0) {   
        alert("Введите положительное число!");
      }
      
      if (this.timer === 0 && this.state.seconds > 0) {   
        this.timer = setInterval(this.countDown, 1000);
      }
    }

    render() {
      return(
        <div>
            <TimerInput value={this.state.seconds} onChangeEvent={this.onChangeEvent} />
            <StartButton />

            <button onClick={this.handleStartTimer}>Старт в таймере</button>
           
            <h2>{this.state.time.h}:{this.state.time.m}:{this.state.time.s}</h2>
        
        </div>
      );
    }
  }
  
export default TimerTwo;  
