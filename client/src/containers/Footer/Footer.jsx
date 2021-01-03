import React from 'react'
import './Footer.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
    return (
        <footer>
           <div className="foot" >
               <div className="flex" >
                   <div className="lists" >
                       <div><a href="/">Student</a></div>
                       <div><a href="/">Teacher</a></div>
                       <div><a href="/">School</a></div>
                       <div><a href="/">Coaching</a></div>
                       <div><a href="/">Blogs</a></div>
                       <div><a href="/">Contact Us</a></div>
                       {/*<div className="odd" ><a href="/">Complete security. no asterisks.</a></div>
                       <p className="par" >CRED encrypts all data and transactions to ensure a completely secure experience for our members.</p>
                       <img src="https://web-assets.cred.club/_next/assets/images/home-page/security-cert.png" alt="pic" />*/}
                   </div>
                   <div className="lis" >
                      {/*<div><span>calculators</span><a href="/calculators/sip-calculator">SIP calculator</a><a href="/calculators/emi-calculator" >EMI calculator</a><a href="/calculators/ppf-calculator" >PPF calculator</a><a href="/calculators/home-loan-calculator">home loan calculator</a><a href="/calculators/car-loan-calculator" >car loan calculator</a></div>
                       <div><span>About Studytable</span>
                          <div className="desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                       </div>
                       <div><span>About Studytable</span>
                          <div className="desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                       </div>
                       <div><span>About Studytable</span>
                          <div className="desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                       </div>
                       <div><span>About Studytable</span>
                          <div className="desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                       </div>
                       <div><span>About Studytable</span>
                          <div className="desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                       </div>
                       <div><span>About Studytable</span>
                          <div className="desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                     </div> */  }      
                     <div className="soc">
                       Follow us on : 
                       <span> 
                       <MailIcon style={{marginRight:'1em',color:'white',fontSize:'30px'}} />
                       <TwitterIcon style={{marginRight:'1em',color:'white',fontSize:'30px'}} />
                       <InstagramIcon style={{marginRight:'1em',color:'white',fontSize:'30px'}} />
                       <LinkedInIcon style={{marginRight:'1em',color:'white',fontSize:'30px'}} /> 
                       </span>                        
                     </div>          
                   </div>
               </div>
               <div className="par odd" >copyright © 2020 Studytable Pvt Ltd.</div>
           </div>
        </footer>
    )
}
