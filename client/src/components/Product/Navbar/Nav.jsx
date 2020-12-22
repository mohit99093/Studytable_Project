import React,{useEffect, useState} from 'react'
import './Nav.scss'
import DehazeIcon from '@material-ui/icons/Dehaze';

export default function Nav() {
    const [classes,setClasses] = useState('')
    const listenScrollEvent = e => {
        if (window.scrollY > (window.screen.height*0.8)) {
          setClasses("bgwhite")
        } else {
            setClasses("")
        }
      }   
     useEffect(()=>{
        window.addEventListener('scroll',listenScrollEvent)
     },[])  
    return (
        <header className={classes+ " header_nav"} >
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
                <DehazeIcon className="icon" />
            </nav>
        </header>
    )
}
