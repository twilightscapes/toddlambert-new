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




.slider{z-index:-1;}

.container2 {
	overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height:100vh;
}

section {
  scroll-snap-type: y mandatory;
  border-bottom:0px solid #777 !important;
  height:100vh;
	overflow-y: scroll;
}

.slider1{
  position:fixed; 
  top:0;
  width:100vw;
  height:100vh;
  height:100%;
  display:block;
  background-size:cover;
  min-height:100vh;
}










// .intro:before{
// 	content: "About Twilightscapes";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// }



.primary p{margin:0 0 .5rem 0 !important; padding:0!important;}

.edu li{margin:2rem 0;}
.todd-headline{margin:0 0 1rem 0;}

h2{color:#dd4000}

.primary{padding:0;}


.outer .container{width:100%; height:auto; margin:0 auto;}

.imgbox img{border-radius:12px; border:0px solid #000;}

.spacer33{height:15vh;}
.spacer66{height:66vh;}
.spacer99{height:99vh;}

p{line-height:150%;}


body.light .speech p span{color:#fff;}

.outer{padding:0 11%; border:0px solid red; padding-top:2rem !important;}
.split div:first-child{padding-right:1rem; border:0px solid yellow;}
.split div:last-child{padding-left:1rem; border:0px solid blue;}

@media (min-width: 48rem) and (max-width: 1000px) { 
	
 }


@media (max-width: 48rem) {
.split{flex-direction:row !important; width:100% !important;}

.split div{width:100% !important}
.split div:first-child{order:1}
.split div:last-child{order:2}

.outer{padding:5%; border:0px solid red; }
.split div:first-child{padding-right:0rem; border:0px solid yellow;}
.split div:last-child{padding-left:0rem; border:0px solid blue;}

.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:2}
.split.nowrap div:last-child{order:1}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}



.intro:before{font-size:200%;}

// body.dark, body.dark .container{background-color:#fff !important;}
body.dark .container, .outer, .intro, .split{background-color:#eee !important;}





}

@media (min-width: 58rem) {
	.outer{padding:0 14%;}
	}




  .image-wrap {
    width: 60%;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  
  .image-wrap img {
    width: 100vw;
    z-index:0;
  }
  
  
  
  
  @media (min-width: 48em) {
  
    .boom1{font-size:380% !important;}
    .boom2{font-size:250% !important;}
    .boom3{font-size:380% !important;}
    .boom4{font-size:280% !important;}
  
  }
  
  @media (max-width: 48em) {
  
    .image-wrap {height:auto !important; min-height:200px !important;}
    
    .intro:before{font-size:150% !important}
    .content{flex-direction:column !important;}
    .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
    .pitch{font-size:250% !important; text-align:center;}
    .split {display:block !important; width:100% !important; }
    .split div{max-width:100% !important; background:tranparent !important;}
    .sidebar{margin:2rem 0;}
    .sidebar .logolink{text-align:center !important;}
  }

  @media (display-mode: standalone) {
    /* All installed PWAs */

  }
    
  @media (hover: hover) {

    section {
      scroll-snap-type: none;
      border-bottom:1px solid #777 !important;
      overflow:auto;
      height:100%;
    }


    .container2 {
      overflow-y: auto;
      scroll-snap-type: none;
      height:100%;
    }


  }




`





const HomePage = () => (
  <Layout>
   <CustomBox>
  
  <div className="logolink" style={{textAlign:'center', position:'absolute', zIndex:'0', width:'98vw'}}><a title="Logo - Back To Home" href="/" style={{fontSize:'60px',  textDecoration:'none'}}><span class="logofirst">todd</span> <span className="logocolor">lambert</span></a></div>


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
 



{/* <Navbar /> */}
{/* <TouchUp /> */}

  
<div className="container2" style={{position:'', top:'', height:'', display:'', overflowY:'scroll', overflowX:'hidden', background:'transparent'}}>




	
{/*  Panel 1 */}


<section className="child" style={{position:'relative', height:'100vh', paddingTop:'100px', overflow:'hidden'}}>




  </section>
{/*  Panel 1 */}



{/*  Panel 2 */}

<section className="child" style={{position:'relative', height:'100vh', overflow:'hidden'}}>
  <div style={{width:'50%', maxWidth:'50vw', right:'0', position:'absolute'}}>
<BgImage filename="ahout-todd.jpg" style={{padding:'0',}} />
</div>
</section>
{/*  Panel 2 */}






{/*  Panel 3 */}


 
 <section className="child about1 outer1 section" style={{position:'relative', paddingTop:'100px', overflow:'auto'}}>
 
 {/* SKILLS TIMELINE */}

<div className="container1" style={{}}>
<h3 className="logotype" style={{textAlign:'center', marginTop:'50px', fontSize:'250%',}}>
Hats worn
</h3>
</div>

<div style={{ display:'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'spaceAround',
  alignItems: 'auto',
  alignContent: 'flexEnd',}}>

<div className="split1 nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

<div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'30px', padding:'', order:'1', position:'relative',}}>
<Image alt="Entrepreneur Hat - Top Hat" filename="hats1.png" style={{borderColor:'transparent', }} />
<br />
<h2>Entrepreneur</h2>
<p>
Being a self-starter and self-learner are the basic fundamentals of a natural entrepreneur. I&apos;ve been involved both as a partner and a consultant to many businesses and I am able to see the forest through the trees, while keeping an eye on the bottom-line.
</p>

</div>

 </div>
 
 
 
 
 
 <div className="split1 nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>
<Image className="color" alt="Webmaster Hat - Square Hat" filename="hats2.png" style={{borderColor:'transparent',}} />
<br />
<h2>Webmaster</h2>
<p>
Back in the day, a webmaster learned that a full tool box was needed for web design and development. I learned UNIX, IIS, TCP/IP, Cpanel, and PHPMyadmin while entertaining myself primarily in the CGI-Bin directory.
</p>

</div>

 </div>



 

 
 
 <div className="split1 nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'30px', padding:'', order:'1', position:'relative',}}>
<Image className="color" alt="Designer Hat - Beret" filename="hats3.png" style={{borderColor:'transparent',}} />
<br />
<h2>Designer</h2>
<p>
Over the years I&apos;ve spent inordinate amounts of time learning Typography, Space and Composition. Learning is my personal design theory and I still strive to learn something new each day by trying things.
</p>

</div>

 </div>

 
  </div>
{/* end of first row */}


<div style={{ display:'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'spaceAround',
  alignItems: 'auto',
  alignContent: 'flexEnd',}}>










 <div className="split1 nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>
<Image alt="Developer Hat - Beanie" filename="hats4.png" style={{borderColor:'transparent',}} />
<br />
<h2>Developer</h2>
<p>
As the Internet became more complicated I immersed myself in different programming languages and countless environments. Learning to adapt design to logic was a major accomplishment and one that I still work at today.
</p>

</div>

 </div>
 
 
 
 <div className="split1 nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>
<Image alt="Marketer Hat - Ball Cap" filename="hats5.png" style={{borderColor:'transparent',}} />
<br />
<h2>Marketer</h2>
<p>
I&apos;ve been on the Internet since the beginning. I&apos;ve become adept at determining what people wanted to see and where. What information or answer they were searching for, became the catalyst of numerous ad campaigns and my mission for my clients.
</p>

</div>

 </div>
 
 

 <div className="split1 nowrap1" style={{display:'flex', flex:'1 1 auto', flexBasis:'24%',  justifyContent:'space-around', flexDirection:'column', position:'relative',  width:'', margin:'0 1rem', padding:'0', borderRadius:'12px', overflow:'',}}>

 <div className="container3 speech1" style={{ width:'', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<Image alt="Analyst Hat - Fedora" filename="hats6.png" style={{borderColor:'transparent',}} />
<br />
<h2>Analyst</h2>
<p>
Success online is not simply throwing numbers(visitors) at something. I&apos;ve learned to use site analytics to drive the direction of design and development projects creating a prove-it-or-lose-it type of mantra that defines performance and usability.
</p>

</div>

 </div>




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


 {/* SKILLS TIMELINE */}








</section>



<div className="container3" style={{}}>
<h3 className="logotype" style={{textAlign:'center', marginTop:'50px', fontSize:'250%',}}>
Resume
</h3>
</div>

<section className="child" style={{position:'relative', height:'', paddingTop:'0', fontSize:'100%', background:'transparent', overflowY:'auto', overflowX:'hidden', display:'flex', flexWrap:'nowrap'}}>


<div className=" outer1 section1" style={{paddingTop:'100px', height:'', background:'transparent'}}>




<div className="" style={{display:'flex', justifyContent:'center', alignItems:'', position:'relative', width:'100%', margin:'0 2vw', background:'transparent'}}>



<div className="primary1  " style={{color:'', }}>

{/* <h3 className="logotype printonly" style={{textAlign:'left', fontSize:'250%', height:'50px',}}>
Lambert
</h3> */}



	
	<h2 className="todd-headline">Highlights</h2>

<p><strong>Product Designer - Skilled web designer/developer with 21 years of professional experience.</strong></p>

<p>Successful product designer able to integrate both technical and creative skills to create cross-browser and cross-platform solutions with modern web architecture and navigation systems.</p>

<p>Proven record of completing bold, clean, and effective designs with consistent performance ahead of schedule and under budget.</p>

<p>Industry experience including semiconductor, hospitality, entertainment, health, publishing, finance, insurance, construction, computer software, and direct marketing.</p>

  
<h2 className="todd-headline" style={{marginBottom:''}}>Proficiency</h2>

<p>Veteran WordPress Theme/Plugin Developer <br />React JS Frontend Designer/Developer</p>

<p>Responsive, Reactive, Adaptive Design, progressive enhancement, PWA development, object oriented CSS animation.</p> 

<p>Analytics, SEO, UI design, Information Architecture &amp; Content Management System integrations. Photo and Video production. </p>

<p><strong>I prefer: JAM stack, React, Gatsby, Canon, Subaru and my Mac.</strong></p>


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

</section>
{/* Panel 3 */}







<section className="child" style={{position:'relative', height:'auto', zIndex:'', paddingTop:'100px',}}>
  <div className="outer" style={{margin:'0 0'}}><a href="#portfolio"> Portfolio</a> <Contact /></div> 
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

<section className="child" style={{position:'relative', height:'100vh'}}>




</section>


<Footer />

</div>{/* End Container2 */}

</CustomBox>
  </Layout>
)

export default HomePage





