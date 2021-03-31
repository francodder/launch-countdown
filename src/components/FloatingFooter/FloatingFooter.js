import React from 'react'

// # ASSETS
import './FloatingFooter.css'

// # COMPONENTS
import FooterIcon from './FooterIcon/FooterIcon'

export default function FloatingFooter() {

    const linkedinUrl= 'https://www.linkedin.com/in/franco-rocchia/'
    const githubUrl= 'https://github.com/francodder?tab=repositories'
    const instaUrl= 'https://www.instagram.com/franco.rocchia/'

    return (
        <div className="floating-footer">
            <FooterIcon iconId = "linkedin" href={linkedinUrl}/>
            <FooterIcon iconId = "github" href={githubUrl}/>
            <FooterIcon iconId = "instagram" href={instaUrl}/>
        </div>
    )
}
