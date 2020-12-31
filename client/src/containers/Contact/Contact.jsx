import React from 'react'
import './Contact.scss'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useState } from 'react';


export default function Contact() {
    const schema = {name:'',email:'',contact:'',city:'',school:''}
    const [inp,setInp] = useState([{name:'name',val:'name'}])
    let val
    const handle =()=>{
        if(inp.length===1){
            setInp([...inp,{name:"email",val:"email"}])            
        }
        else if(inp.length===2){
            setInp([...inp,{name:"contact",val:"contact"}])            
        }
        else if(inp.length===3){
            setInp([...inp,{name:"city",val:"city"}])            
        }
        else if(inp.length===4){
            setInp([...inp,{name:"school",val:"Institute/school/coaching"}])            
        }
    }
    console.log(inp)
    return (
        <div className="contacts" >
             <h1>Contact Us</h1>
            <div className="form" >
                <form onSubmit={(e)=>{e.preventDefault()}}>
                   {inp.map(item=>{
                       return(
                        <div className="input" >
                        <h6><TextField id="outlined-basic" name={item.name} label={item.val} required />  </h6> 
                       </div>
                       )
                   })}
                   {inp.length<5?<div className="next" > <Button className="btn13" onClick={handle} > Next </Button> </div>:
                   <div className="subm" > <Button className="btn13" type="submit" > Submit </Button> </div>
                }
                   
                </form>
            </div>
        </div>
    )
}
