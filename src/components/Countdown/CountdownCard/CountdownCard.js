import React from 'react'

import './CountdownCard.css'

export default function CountdownCard(props) {

    const {time, label} = props
    
    let addDash = true
    if(time === 0) addDash = false

    return (
    <div className="cd-card__layout">
        <div className="cd-card__container">
            <div className="cd-card__top"></div>
            <div className="cd-card__top see-through"></div>
            <div className="cd-card__bottom"></div>
            <div className="cd-card__bullet-left"></div>
            <div className="cd-card__bullet-right"></div>
            {time || time === 0 
                ? <p className="cd-card__time">{time < 10 ? '0' + time : time }</p>
                : <p className="cd-card__time">--</p>
            }
        </div>
        <p className="cd-card__label">{label || 'hours'}</p>
    </div>

    )
}
