import React from 'react'
import './Main.scss'

export default function Main() {
    return (
        <section className="main" >
            <div className="navbar" >
               <div className="logo" >
                 StudyTable
               </div>
               <div className="menu" >
                   <div className="list" >
                      <a href="/product">Products</a>
                   </div>
                   <div className="list" >
                      <a href="/">We are hiring</a>
                   </div>
                   <div className="btns" >
                         Download Studytable
                   </div>
               </div>
            </div>
            <div className="heads">
                <div className="reward">
                   Rewards for paying credit card bills.
                </div>
                <div className="sub" >
                    Join 3M+ members and win rewards worth ₹5 crores daily.
                </div>
                <div className="dwnld" >
                   Download Studytable
                </div>
            </div>
        </section>
    )
}
