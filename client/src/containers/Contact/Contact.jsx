import React from 'react'
import './Contact.scss'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useState } from 'react';


export default function Contact() {
    const [inp,setInp] = useState(['name'])
    let val
    const handle =()=>{
        if(inp.length===1){
            val = "email"
            setInp([...inp,val])            
        }
        else if(inp.length===2){
            val = "contact"
            setInp([...inp,val])            
        }
        else if(inp.length===3){
            val = "phone"
            setInp([...inp,val])            
        }
        else if(inp.length===4){
            val = "school"
            setInp([...inp,val])            
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
                        <h6><TextField id="outlined-basic" label={item} required />  </h6> 
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
