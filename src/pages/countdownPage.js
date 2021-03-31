import React from 'react'

// # ASSETS
import './countdownPage.css'
import hillsImage from './assets/pattern-hills.svg'

// # COMPONENTS
import Countdown from '../components/Countdown/Countdown'
import FloatingFooter from '../components/FloatingFooter/FloatingFooter'

export default function countdownPage() {

    // [days, hours, minutes, segs]
    const timeArray = [15, 0, 0, 0]

    return (
        <div className="countdown-page">
            
            <div className="main">
                <h1>We're Launching Soon</h1>
                <Countdown timeArray={timeArray} countdown={true}/>
            </div>
            <FloatingFooter />

            <div className="hills" draggable="false"/>
            {/* <img className="hills" src={hillsImage} draggable="false" alt="Un fondo de montañas vectoriales en color púrpura"/> */}
        </div>
    )
}
