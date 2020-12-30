import React from 'react'
import './Footer.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
    return (
        <div className="fut" >
             <div className="containers" >
                 <div className="head" >
                    Contact Us<span><ChevronRightIcon fontSize="inherit" /></span>
                 </div>
                 <div class="middlegap"></div>
                 <div className="contact" >
                     <div className="address" >
                         <div><a href="/">Blogs</a></div>
                         <div><a href="/">Contact Us</a></div>
                         <div><a href="/">Student</a></div>
                         <div><a href="/">Teacher</a></div>
                         <div><a href="/">School</a></div>
                         <div><a href="/">Coaching</a></div>
                         <div style={{marginTop:'2em',fontSize:'15px'}} >copyright © 2020 Studytable Pvt Ltd.</div>
                     </div>
                     <div className="social">
                       Follow us on : 
                       <span> 
                       <FacebookIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)',fontSize:'30px'}} />
                       <TwitterIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)',fontSize:'30px'}} />
                       <YouTubeIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)',fontSize:'30px'}} />
                       <InstagramIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)',fontSize:'30px'}} />
                       <LinkedInIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)',fontSize:'30px'}} /> 
                       </span>                        
                     </div>
                 </div>
             </div>
        </div>
    )
}
