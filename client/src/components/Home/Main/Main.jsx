import React from 'react'
import './Main.scss'

export default function Main() {
    return (
        <section className="main" >
            <div className="navbar" >               
               <div className="menu" >
                   <div className="list" >
                      <a href="/product">Student</a>
                   </div>
                   <div className="list" >
                      <a href="/">Teacher</a>
                   </div>
                   <div className="list" >
                      <a href="/">School</a>
                   </div>
                   <div className="list" >
                      <a href="/">Coaching</a>
                   </div>
                   <div className="list" >
                      <a href="/">Contact Us</a>
                   </div>
                   <div className="list" >
                      <a href="/">Blogs</a>
                   </div>
                   <div className="btns" >
                         Download Studytable
                   </div>
               </div>
            </div>
            <div className="heads">
                <div className="reward">
                   STUDY<span>table</span>
                </div>
                <div className="sub" >
                    "Care a smile"
                </div>
            </div>
            <div className="dwnld" >
                   Download Studytable
                </div>
        </section>
    )
}
