import React, { Component } from 'react'

// # ASSETS
import './FooterIcon.css'

export default function FooterIcon(props) {
    
    const {iconId, href} = props

    return (
        <a href={href || "#"} target="_blank">
            <span className={`footer-icon ${iconId}`} ></span>
        </a>
    )
}
