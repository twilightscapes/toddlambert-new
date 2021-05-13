import React from 'react'
import Layout from '../components/Layout-noc'
import Footer from '../components/Footer'
// import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import BgImage from '../components/BgImage'
import Image from '../components/Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { FiCornerRightDown } from 'react-icons/fi'
// import Navbar from '../components/Navbar2'
import Contact from '../components/Contact-inc'
import TouchUp from '../components/TouchUp'

import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { WiDaySunny } from 'react-icons/wi';

const CustomBox = styled.div`

.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}



.intro:before{
	content: "";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#111; text-shadow: 12px 7px 15px 12px black;
}



.primary p{margin:0 0 .5rem 0 !important; padding:0!important;}

.edu li{margin:2rem 0;}
.todd-headline{margin:0 0 1rem 0;}

h2{color:#dd4000}

.primary{padding:0;}


// .outer .container{width:100%; height:auto; margin:0 auto;}

// .imgbox img{border-radius:12px; border:0px solid #000;}

// .spacer33{height:15vh;}
// .spacer66{height:66vh;}
// .spacer99{height:99vh;}

// p{line-height:150%;}




.outer{padding:0 11%; border:0px solid red; padding-top:2rem !important;}
.split div:first-child{padding-right:1rem; border:0px solid yellow;}
.split div:last-child{padding-left:1rem; border:0px solid blue;}



@media (max-width: 48rem) {


// body.dark .container, .outer, .intro, .split{background-color:#eee !important;}
.logofirst, .logocolor{font-size:10vw;}
.resume{width:100% !important; display:block !important; display:block !important; padding-right:1rem;} 
.resume .secondary1{ margin:0 !important; padding-right:1rem;}
}


// .color{max-width:inherit !important; width:inherit !important; height:inherit !important; border:20px solid red !important;}

.hats{width:100% !important; display:block; position:relative; border:0px solid white; padding:0 10vw;}
// .hats img{position:absolute !important; right:0 !important; border:0px solid red !important;
 max-width:150px, max-height:150px;}


`





const HomePage = () => (
  <Layout>
   <CustomBox>
  
  
  <div className="logolink" style={{textAlign:'center', position:'absolute', top:'8vh', zIndex:'0', width:'98vw'}}><a title="Logo - Back To Home" href="/" style={{fontSize:'7vw',  textDecoration:'none'}}><span class="logofirst">todd</span> <span className="logocolor">lambert</span></a></div>


{/* <Navbar /> */}
<TouchUp />

  
<div className="container2 intro" style={{position:'', top:'2vh', height:'', display:'', overflowY:'', overflowX:'', background:'transparent'}}>

	
{/*  Panel 1 */}


<section className="child" style={{position:'relative', height:'100vh', paddingTop:'0', overflow:'', display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center'}}>

<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={500}>
<h1 className="logofirst" style={{textAlign:'center', marginTop:'50px', fontSize:'7vw',
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 2px 0 #eee'

}}>
Digital Product Design
</h1>
</ScrollAnimation>

<h3 className="logofirst" style={{textAlign:'center', marginTop:'50px', fontSize:'7vw%',
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 2px 0 #eee',
margin:'-4vh 0 -4vh 0',
textAlign:'center'
}}>
  
</h3>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={600}>
<h4 className="logofirst" style={{textAlign:'center', marginTop:'50px', fontSize:'7vw',
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 2px 0 #eee',



}}>
Conceptual Photography
</h4>
</ScrollAnimation>



  </section>
{/*  Panel 1 */}



{/*  Panel 2 */}

<section className="child split" style={{position:'relative', height:'100vh', overflow:'', display:'flex'}}>
<div style={{width:'55vw'}}>
  <blockquote style={{padding:'1rem 0 1rem 5vw'}}>

  <h3 className="logotype" style={{textAlign:'center', margin:'5vh', fontSize:'250%',}}>
About
</h3>

<p>Todd Lambert, a “webdude” that grew up in Southern California and whose career and endeavors have taken him to over 14 western states including living in Colorado, Texas and Oregon. He eventually found home living on the coastal Mississippi Sound.
</p>
<p>
Having lived on the Mississippi gulf coast, twice, Todd has assisted many small businesses that were affected by Hurricane Katrina in establishing a sucessful online presence.
</p>
<p>
Todd is also actively involved with photography. You can often find him in the middle of the night down some dark alley while doing night photography and astrophotography which are his favorite subjects.
</p>
<p>
Todd is single and has a dog-child and playful Boxer named “Zoe”, that takes up most of his free time.
</p>

  </blockquote>



    
   




</div>

  <div style={{width:'100%', maxWidth:'40vw', right:'', position:''}}>
  <ScrollAnimation animateIn="fadeIn" animateOut="" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={0} duration={3}>
<BgImage filename="ahout-todd.jpg" style={{padding:'2rem',}} />
</ScrollAnimation>
</div>

</section>
{/*  Panel 2 */}






{/*  Panel 3 */}


 
 <section className="child about1 outer1 section" style={{position:'relative', height:'', padding:'100px 2vw', overflow:'', display:'flex'}}>
 
 {/* SKILLS TIMELINE */}

 <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={0} duration={2}>

 <h3 class="logotype"  style={{textAlign:'center', marginTop:'5vh', fontSize:'250%', clear:'right'}}>Photography</h3>
<div style={{display:'flex', padding:'1rem', flexWrap:'nowrap', justifyContent:''}}>


  <div style={{width:'50%', margin:'1rem'}}>
    <a href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <Image className="" alt="Todd Lambert Night photos" filename="twilightscapes-button.jpg" />
    <br />
    Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the Western States like you&apos;ve never seen them before.
    <h5 style={{textAlign:'center',}}>Visit Twilightscapes.com</h5></a>
    </div>




 
    
    <div style={{width:'50%', margin:'1rem'}}>
    <a href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <Image className="" alt="Todd Lambert Night photos" filename="urban-fetish-button.jpg" />
    <br />
    Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. 
    
    <h5 style={{textAlign:'center',}}>Visit UrbanFetish.com</h5></a>
    
    </div>
</div>
   
{/* <div className="container1" style={{}}>
<h3 className="logotype" style={{textAlign:'center', margin:'50px', fontSize:'250%',}}>
Hats worn
</h3>
</div> */}




{/* <div style={{ display:'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'spaceAround',
  alignItems: 'center',
  alignContent: 'center',}}>

<div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'', padding:'', order:'1', position:'relative',}}>


<div className="hats" style={{ textAlign:'center'}}>
  <h2>Entrepreneur</h2>
  <Image className="color" alt="Entrepreneur Hat - Top Hat" filename="hats1.png" />
  </div>


<p>
Being a self-starter and self-learner are the basic fundamentals of a natural entrepreneur. I&apos;ve been involved both as a partner and a consultant to many businesses and I am able to see the forest through the trees, while keeping an eye on the bottom-line.
</p>

</div>

 </div>
 
 
 
 
 
 <div className="split nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

 <div className="hats" style={{ textAlign:'center'}}>
<h2>Webmaster</h2>
<Image className="color" alt="Webmaster Hat - Square Hat" filename="hats2.png" width="200px" height="200px" style={{borderColor:'transparent',}} />
</div>

<p>
Back in the day, a webmaster learned that a full tool box was needed for web design and development. I learned UNIX, IIS, TCP/IP, Cpanel, and PHPMyadmin while entertaining myself primarily in the CGI-Bin directory.
</p>

</div>

 </div> 



 

 
 
 <div className="split nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'', padding:'', order:'1', position:'relative',}}>

 <div className="hats" style={{ textAlign:'center'}}>
<h2>Designer</h2>
<Image className="color" alt="Designer Hat - Beret" filename="hats3.png" width="200px" height="200px" style={{borderColor:'transparent',}} />
</div>

<p>
Over the years I&apos;ve spent inordinate amounts of time learning Typography, Space and Composition. Learning is my personal design theory and I still strive to learn something new each day by trying things.
</p>

</div>

 </div>

 */}

{/* end of first row */}


<div style={{ display:'none',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'spaceAround',
  alignItems: 'center',
  alignContent: 'center',}}>










 
 {/*  */}

 <div className="split " style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

 <div className="hats" style={{ textAlign:'center'}}>

<h2>Entrepreneur</h2>
  <Image className="color" alt="Entrepreneur Hat - Top Hat" filename="hats1.png" />


</div>

<p>
Being a self-starter and self-learner are the basic fundamentals of a natural entrepreneur. I&apos;ve been involved both as a partner and a consultant to many businesses and I am able to see the forest through the trees, while keeping an eye on the bottom-line.
</p>

</div>

 </div>
{/*  */}



 
 {/*  */}

 <div className="split nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

 <div className="hats" style={{ textAlign:'center'}}>

 <h2>Webmaster</h2>
<Image className="color" alt="Webmaster Hat - Square Hat" filename="hats2.png" width="200px" height="200px" style={{borderColor:'transparent',}} />
</div>

<p>
Back in the day, a webmaster learned that a full tool box was needed for web design and development. I learned UNIX, IIS, TCP/IP, Cpanel, and PHPMyadmin while entertaining myself primarily in the CGI-Bin directory.
</p>

</div>

 </div>
{/*  */}



 
 {/*  */}

 <div className="split nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

 <div className="hats" style={{ textAlign:'center'}}>

 <h2>Designer</h2>
<Image className="color" alt="Designer Hat - Beret" filename="hats3.png" width="200px" height="200px" style={{borderColor:'transparent',}} />
</div>

<p>
Over the years I&apos;ve spent inordinate amounts of time learning Typography, Space and Composition. Learning is my personal design theory and I still strive to learn something new each day by trying things.
</p>

</div>

 </div>
{/*  */}


















{/*  */}
{/*  */}
    {/*  */}


{/*  */}
 <div className="split nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'start', flexDirection:'', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

 <div className="hats" style={{ textAlign:'center'}}>
<h2>Developer</h2>   
<Image className="color" alt="Developer Hat - Beanie" filename="hats4.png" style={{borderColor:'transparent',}} />
</div>
<p>
As the Internet became more complicated I immersed myself in different programming languages and countless environments. Learning to adapt design to logic was a major accomplishment and one that I still work at today.
</p>

</div>

 </div>
 
 {/*  */}
 
 
 <div className="split nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

 <div className="hats" style={{ textAlign:'center'}}>
<h2>Marketer</h2>
<Image className="color" alt="Marketer Hat - Ball Cap" filename="hats5.png" style={{borderColor:'transparent',}} />
</div>

<p>
I&apos;ve been on the Internet since the beginning. I&apos;ve become adept at determining what people wanted to see and where. What information or answer they were searching for, became the catalyst of numerous ad campaigns and my mission for my clients.
</p>

</div>

 </div>
 
 {/*  */}

 <div className="split nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

 <div className="hats" style={{ textAlign:'center'}}>
<h2>Analyst</h2>
<Image className="color" alt="Analyst Hat - Fedora" filename="hats6.png" style={{borderColor:'transparent',}} />
</div>

<p>
Success online is not simply throwing numbers(visitors) at something. I&apos;ve learned to use site analytics to drive the direction of design and development projects creating a prove-it-or-lose-it type of mantra that defines performance and usability.
</p>

</div>

 </div>
{/*  */}










</div>

 {/* <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 
  

<Image alt="Co-worker talks about Todd Lambert" filename="hats6.png" style={{borderColor:'transparent',}} />



   
<div className="container speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Partner</h2>
<p>
Success online is not simply throwing numbers(visitors) at something. I&apos;ve learned to use site analytics to drive the direction of design and development projects creating a prove-it-or-lose-it type of mantra that defines performance and usability.
</p>



</div>

 </div> */}

</ScrollAnimation>
 {/* SKILLS TIMELINE */}








</section>



<div className="container3" style={{}}>
<h3 className="logotype" style={{textAlign:'center', marginTop:'50px', fontSize:'250%',}}>
Resume
</h3>
</div>

<section className="child" style={{position:'relative', height:'', padding:'0 2vw', fontSize:'100%', background:'transparent', overflowY:'auto', overflowX:'hidden', display:'flex', flexWrap:'nowrap'}}>


<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={0} duration={2}>

<div className=" outer1 section1" style={{paddingTop:'100px', height:'', background:'transparent'}}>




<div className="resume" style={{display:'flex', justifyContent:'center', alignItems:'', position:'relative', width:'100%', margin:'0 2vw', background:'transparent'}}>



<div className="primary1  " style={{color:'', }}>

{/* <h3 className="logotype printonly" style={{textAlign:'left', fontSize:'250%', height:'50px',}}>
Lambert
</h3> */}



	
	<h2 className="todd-headline">Highlights</h2>

<p><strong>Product Designer - Skilled web designer/developer with 21 years of professional experience.</strong></p>

<p>Successful product designer able to integrate both technical and creative skills to create cross-browser and cross-platform solutions with modern web architecture and navigation systems.</p>

<p>Proven record of completing bold, clean, and effective designs with consistent performance ahead of schedule and under budget.</p>

<p>Industry experience including semiconductor, hospitality, entertainment, health, publishing, finance, insurance, construction, computer software, and direct marketing.</p>

<br />
<h2 className="todd-headline" style={{marginBottom:''}}>Proficiency</h2>


<p>Veteran WordPress Theme/Plugin Developer <br />React JS Frontend Designer/Developer</p>

<p>Responsive, Reactive, Adaptive Design, progressive enhancement, PWA development, object oriented CSS animation.</p> 

<p>Analytics, SEO, UI design, Information Architecture &amp; Content Management System integrations. Photo and Video production. </p>

<p><strong>I prefer: JAM stack, React, Gatsby, Canon, Subaru and my Mac.</strong></p>

<br />
<h2 className="todd-headline">Education</h2>

<ul className="edu">
<li><strong>Cal State University Fullerton</strong><br />
Web Design and Development - Degree</li>

<li><strong>Coastline Community College</strong><br />
Quality Assurance - Degree</li>

<li><strong>Golden West College</strong><br />
Business Management - Degree</li>

<li><strong>Huntington Beach High School</strong><br />
High School General Courses - Diploma</li>
</ul>

	
</div>


<div className="secondary1 cf p-left" style={{color:'', margin:'0 5vw',}}>
{/* <h3 className="printonly" style={{textAlign:'right', height:'50px', fontSize:'150%',}}>(228) 239-6088
</h3>  
	 */}
<h2 className="todd-headline">Professional Experience</h2>

<p style={{margin: '0 0 .5rem 0 ',
padding: '0'}}><strong>Todd Lambert Enterprises, 1999 - Present</strong><br />
<em>Sole Proprietor / Photographer</em></p>

<p>Conducted all facets of web development business including meeting with clients, selling web services, and developing methods for improved customer support. <br /> I also like to travel all over the country and photograph spooky and abandoned places at night. <a style={{color:'#333'}} href="https://twilightscapes.com">View @ TwilightScapes.com</a></p>

<p><strong>Primal Health, 2013 - 2014</strong><br /> 
<em>Creative Director / Associate Developer</em>
</p>
<p>
Responsible for all graphic components and direct marketing efforts. Worked with various departments to advance reach through social marketing, engineering and analytics. Also performed SEO and conducted extensive AB testing.</p>

<p><strong>Texas Instruments, 2010 - 2013</strong><br /> 
<em>Style Architect / Front End Developer / Senior UI Designer</em>
</p>
<p>
Worked on all aspects of TIs website, from new ad campaigns and interactive widgets to the core infrastructure including a new re-design and replacement of site navigation site-wide. Championed responsive design techniques and other modern architecture for use on corporate site. Utilized Jquery animation for replacing all of TIs legacy Flash files.</p>

<p><strong>AGJ Systems &amp; Networks, 2008 - 2010 </strong><br />
<em>Web Director / Lead Developer / Senior Designer</em>
</p>
<p>
Solely responsible for all design and development aspects of web department. Interacted with customers and other departments to integrate designs into modern websites catered to customer needs.</p>

<p><strong>TeleVox Software, 2004 - 2007</strong><br />
<em>Director of Web Development</em>
</p>
<p>
Responsible for site architecture, design, graphics, programming, copywriting/editing, project management of all TeleVox websites and online marketing campaigns. Supervised 25 designers and developers.</p>


</div>

 </div>

 {/* <BgImage filename="resume-bg1.png" style={{padding:'',}} /> */}
</div>
</ScrollAnimation>
</section>
{/* Panel 3 */}







<section className="child" style={{position:'relative', height:'auto', zIndex:'', paddingTop:'',}}>
  <div className="outer" style={{margin:'0 0'}}><Contact /></div> 
 </section>



{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}



{/* 
<div className="waveWrapper waveAnimation">
  <div className="waveWrapperInner bgTop">
  
    <div className="wave waveTop" style={{backgroundImage:'url(./wave-top.png)' }}></div>
  </div>
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" style={{backgroundImage:'url(./wave-mid.png)' }}></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom" style={{backgroundImage:'url(./wave-bot.png)'}}></div>
  </div>
</div> */}

<section className="child" style={{position:'relative', height:''}}>




</section>

<div className="themer" style={{display:'block', position:'fixed', right:'40px', top:'20px', zIndex:'2'}}><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="themeSlide">
            
            <input
              type="checkbox" value="None" id="themeSlide" name="themeSlide"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            
          <label htmlFor="themeSlide" style={{color:'#222', textAlign:'center', padding:'0',}}><WiDaySunny /></label></div>
        )}
      </ThemeToggler></div>


<Footer />

</div>{/* End Container2 */}

</CustomBox>
  </Layout>
)

export default HomePage





