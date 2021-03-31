import React, { Component } from 'react'

// # ASSETS
import './Countdown.css'

// # COMPONENTS
import './CountdownCard/CountdownCard'
import CountdownCard from './CountdownCard/CountdownCard'

export class Countdown extends Component {

    constructor(props) {
        super(props)

        this.isCountdown = this.props.countdown || null
        
        const timeArray = this.props.timeArray
        const formatedTime = this.formatTime(timeArray)
        this.totalTime = this.getTotalTime(formatedTime)


        if(this.isCountdown) {

            this.state = {
                days: formatedTime[0],
                hours: formatedTime[1],
                minutes: formatedTime[2],
                seconds: formatedTime[3]
            }
        }
        else {    
            this.state = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }
    }

    componentDidMount() {
        const MS_PER_INTERVAL = 1000
        this.timeInterval = setInterval(this.validateTime.bind(this), MS_PER_INTERVAL, this.isCountdown)
    }
    

    formatTime(timeArray) {
        
        let days = 0
        let hours = 0
        let minutes = 0
        let seconds = 0

        if(timeArray[0] <= 99 && timeArray[0] >= 0) days = timeArray[0]
        else if(timeArray[0] > 99) days = 99
        else if(timeArray[0] < 0) days = 0

        if(timeArray[1] <= 23 && timeArray[1] >= 0) hours = timeArray[1]
        else if(timeArray[1] > 23) hours = 23
        else if(timeArray[1] < 0) hours = 0

        if(timeArray[2] <= 59 && timeArray[2] >= 0) minutes = timeArray[2]
        else if(timeArray[2] > 59) minutes = 59
        else if(timeArray[2] < 0) minutes = 0

        if(timeArray[3] <= 59 && timeArray[3] >= 0) seconds = timeArray[3]
        else if(timeArray[3] > 59) seconds = 59
        else if(timeArray[3] < 0) seconds = 0

        const formatedTime = [days, hours, minutes, seconds]

        return formatedTime
    }

    // Pasa días, horas y minutos a segundos y los suma
    getTotalTime(timeArray) {

        let totalTime = 0

        if(timeArray[0]) totalTime += timeArray[0] * (24 * 60 * 60)
        if(timeArray[1]) totalTime += timeArray[1] * (60 * 60)
        if(timeArray[2]) totalTime += timeArray[2] * 60
        totalTime += timeArray[3]

        return totalTime
    }

    validateTime() {

        if(this.totalTime > 0) {

            this.totalTime --
            if(this.isCountdown) this.thickTimeCountdown()
            else this.thickTimeNormal()
        } 
        else clearInterval(this.timeInterval)
    }

    thickTimeNormal() {

        if(this.state.seconds === 59) {

            // this.seconds = 0; 
            this.setState({seconds: 0})

            if(this.state.minutes === 59) {

                // this.minutes = 0
                this.setState({minutes: 0})

                if(this.state.hours === 23) {

                    // this.hours = 0
                    this.setState({hours: 0})

                    // this.days ++
                    this.setState({days: this.state.days + 1})
                } 
                else {
                    // this.hours ++
                    this.setState({hours: this.state.hours + 1})
                }
            } 
            else {
                // this.minutes ++
                this.setState({minutes: this.state.minutes + 1})
            }
        } 
        else {
            // this.seconds ++
            this.setState({seconds: this.state.seconds + 1})
        }
    }

    thickTimeCountdown() {

        if(this.state.seconds === 0) {

            // this.seconds = 59;
            this.setState({seconds: 59})


            if(this.state.minutes === 0) {

                // this.minutes = 59
                this.setState({minutes: 59})


                if(this.state.hours === 0) {

                    if(this.state.days !== 0) {
                        
                        // this.hours = 23
                        this.setState({hours: 23})

                        this.days --
                        this.setState({days: this.state.days - 1})

                    } 
                } 
                else  this.setState({hours: this.state.hours - 1}) // this.hours --
            } 
            else this.setState({minutes: this.state.minutes - 1}) // this.minutes --

        } 
        else this.setState({seconds: this.state.seconds - 1}) // this.seconds --
    }

    render() {

            return (
                
                <div className="countdown">
                    <CountdownCard time={this.state.days} label="days"/>
                    <CountdownCard time={this.state.hours} label="hours"/>
                    <CountdownCard time={this.state.minutes} label="minutes"/>
                    <CountdownCard time={this.state.seconds} label="seconds"/>
                </div>

            )
    }
}

export default Countdown
