import React, { Component } from 'react';
class ContactButtons extends Component {
 
    render() { 
        return (
        <div>
            <div className='SM-buttons'>
                <ul className='contact-ul'> 
                    <li className='contact-li'>
                        <a target="blank" href="http://www.bkmthis.com/">
                            <span></span>
                            <span></span>
                             <span></span>
                             <span></span>
                            <span class="fa fa-facebook"></span>
                        </a> 
                    </li>
                    <li className='contact-li'>
                        <a target="blank" href="http://www.bkmthis.com/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-twitter"></span>
                        </a> 
                    </li>
                    <li className='contact-li'>
                        <a target="blank" href="http://www.bkmthis.com/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-instagram"></span>
                        </a> 
                    </li>
                    <li className='contact-li'>
                         <a target="blank" href="https://www.linkedin.com/in/kelly-jeffery/">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span class="fa fa-linkedin"></span>
                         </a> 
                    </li>
                 </ul>  
                </div>
                <div className='contact-information'>
                    <div className='text-container-information'>
                        <h4>LOCATION</h4>
                        <p>16 ayrton Gould House,<br/>
                        Bethnal Green,<br/>
                        E2 OSD
                        </p>
                    </div>
                    <div className='email-container-information'>
                        <h4>EMAIL</h4>
                        <p>kellyjeffery1@hotmail.com</p>
                    </div>
                </div>
             </div>
          );
    }
}
 
export default ContactButtons;