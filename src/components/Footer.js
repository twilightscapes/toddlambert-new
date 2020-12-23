import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll'

import Consent from '../components/Consent'





const Footer = class extends React.Component {
  render() {
    return (

      <> 
      <ScrollAnimation animateIn="fadeIn" animateOut="" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={100}>
      <Consent />
  </ScrollAnimation>

  <canvas id="canvas"></canvas> 
  
      <footer className="footer" style={{position:'relative', bottom:'0', width:'100vw'}}>
        <div className="content">
          


        
 
 


        <ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:'3rem 0'}}>
  <li className="socialtext"><h3>I&apos;m<br />Social</h3></li>
<li><a className="social"  href="https://facebook.com/twilightscapes" alt="Facebook" title="Facebook"><FaFacebookSquare /><span>Facebook</span></a></li>
<li style={{display: '',}}><a className="social" href="https://www.linkedin.com/in/toddlambert" alt="LinkIn" title="LinkedIn"><FaLinkedin /><span>LinkedIn</span></a></li>
<li><a className="social" href="https://twitter.com/toddlambert" alt="Twitter" title="Twitter"><FaTwitterSquare /><span>Twitter</span></a></li>
<li><a className="social" href="https://www.instagram.com/twilightscapes" alt="Instagram" title="Instagram"><FaInstagram /><span>Instagram</span></a></li>
<li style={{display: 'none',}}><a className="social" href="https://www.pinterest.com/twilightscapes/" alt="Pinterest" title="Pinterest"><FaPinterestSquare /><span>Pinterest</span></a></li>

<li><a className="social" href="https://www.youtube.com/channel/UCccK2S9xrcLnCR3dTuUwsxQ" alt="YouTube" title="YouTube"><FaYoutubeSquare /><span>YouTube</span></a></li>
</ul>





<div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: ''}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div>



<div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: ''}}>Copyright &copy; {(new Date().getFullYear())} Todd Lambert - Built with Gatsby on Netlify</div>
        </div>
        
      </footer>
     

      </>
      
    )
  }
}

export default Footer

