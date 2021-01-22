import React from 'react'
import Signin from "../../components/Signin/signin"
import Footer from '../Footer/Footer'

export default function Home(props) {
    return (
        <div style={{backgroundImage:'url("https://web-assets.cred.club/_next/assets/images/home-page/hero-bg.png")'}} >
            <Signin  {...props} />
            <Footer/>
        </div>
    )
}
