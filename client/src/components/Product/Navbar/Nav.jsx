import React from 'react'
import './Nav.scss'

export default function Nav() {
    return (
        <header className="header_nav" >
            <nav className="nav" >
                <div className="left" >
                   Studytable
                </div>
                <div className="right" >
                   <ul>
                       <li><a href="/" >Home</a></li>
                       <li><a style={{color:'#2baba7'}} >Products</a></li>
                       <li><a>Portfolio</a></li>
                       <li><a>Insights</a></li>
                   </ul>
                </div>
            </nav>
        </header>
    )
}
