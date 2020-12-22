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
                    The StudyTable<span><ChevronRightIcon fontSize="inherit" /></span>
                 </div>
                 <div class="middlegap"></div>
                 <div className="contact" >
                     <div className="address" >
                         <div>bittu@studytable.ac.in</div>
                         <div>202, Delta, Chemtex Lane, Hiranandani Gardens, Powai, Mumbai.</div>
                         <div>©2020 India Quotient. All Rights Reserved.</div>
                     </div>
                     <div className="social">
                       Follow us on : 
                       <span> 
                       <FacebookIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)'}} />
                       <TwitterIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)'}} />
                       <YouTubeIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)'}} />
                       <InstagramIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)'}} />
                       <LinkedInIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)'}} /> 
                       </span>                        
                     </div>
                 </div>
             </div>
        </div>
    )
}
