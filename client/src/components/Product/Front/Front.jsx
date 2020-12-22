import React from 'react'
import './Front.scss'

export default function Front() {
    return (
        <div className="front" >
            <div className="contain" >
                <h1>We <span style={{color:'#2baba7'}} >empathize</span>.</h1>
                <div className="subs" >
                    Sometimes founders need us to roll-up our sleeves, and sometimes they just need space. Mostly we just cheerlead them to do better in what they are already good at.
                </div>
                <div className="sub1" >
                    We do seed and seed only, and we have been doing seed for the last 10 years.
                </div>
            </div>
            <a className="down"></a>
        </div>
    )
}
