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
	scroll-snap-align: start;
  border-bottom:0px solid #777 !important;
  overflow:hidden;
  height:100vh;
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




.outer .container{width:100%; height:auto; margin:1rem auto;}

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
.split{flex-direction:column !important; width:100% !important;}

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




`





const HomePage = () => (
  <Layout>
   <CustomBox>
  
  <div className="logolink" style={{textAlign:'center', position:'absolute', width:'100vw'}}><a title="Logo - Back To Home" href="/" style={{fontSize:'60px',  textDecoration:'none'}}><span class="logofirst">todd</span> <span className="logocolor">lambert</span></a></div>


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

  
<div className="container2" style={{position:'', top:'', height:'', display:'', overflowY:'scroll', background:'transparent'}}>




	
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

<section className="child about1 outer section" style={{position:'relative', height:'100vh', paddingTop:'100px', overflow:''}}>




<div className="container" style={{margin:'50px',}}>
<h3 className="logotype" style={{textAlign:'center', fontSize:'250%',}}>
Portfolio
</h3>
</div>



<div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>


<div className="container speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative', boxShadow: '0px 0px 5px 0px black', }}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br />

My experience has taught me that good design is not created on a spur of the moment, nor does it come naturally. Good design is a thorough and interative process with site visitors in mind foremost. Good design is identifying a problem for those visitors and removing that problem.
</p>
<h5>- Todd Lambert</h5>
</div>


  

<div className="imgbox grad" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden'}}><Image alt="Co-worker talks about Todd Lambert" filename="todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>


 </div>
 </section>
 
 <section className="child about1 outer section" style={{position:'relative', height:'100vh', paddingTop:'100px', overflow:''}}>
 
 {/* SKILLS TIMELINE */}

<div className="container">
<h3 className="logotype" style={{textAlign:'center', marginTop:'50px', fontSize:'250%',}}>
Hats worn
</h3>
</div>


<div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Entrepreneur</h2>
<p>
Being a self-starter and self-learner are the basic fundamentals of a natural entrepreneur. I&apos;ve been involved both as a partner and a consultant to many businesses and I am able to see the forest through the trees, while keeping an eye on the bottom-line.
</p>

</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image alt="Co-worker talks about Todd Lambert" filename="hats1.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>
 </div>
 
 
 
 
 
 <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 
  <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image className="color" alt="Co-worker talks about Todd Lambert" filename="hats2.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>


 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Webmaster</h2>
<p>
Back in the day, a webmaster learned that a full tool box was needed for web design and development. I learned UNIX, IIS, TCP/IP, Cpanel, and PHPMyadmin while entertaining myself primarily in the CGI-Bin directory.
</p>

</div>
</ScrollAnimation>
 </div>
 
 
 
 
 <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Designer</h2>
<p>
Over the years I&apos;ve spent inordinate amounts of time learning Typography, Space and Composition. Learning is my personal design theory and I still strive to learn something new each day by trying things.
</p>

</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image className="color" alt="Co-worker talks about Todd Lambert" filename="hats3.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>
 </div>
 
 
 
  <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 
  <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image alt="Co-worker talks about Todd Lambert" filename="hats4.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>


 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Developer</h2>
<p>
As the Internet became more complicated I immersed myself in different programming languages and countless environments. Learning to adapt design to logic was a major accomplishment and one that I still work at today.
</p>

</div>
</ScrollAnimation>
 </div>
 
 
 
  <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Marketer</h2>
<p>
I&apos;ve been on the Internet since the beginning. I&apos;ve become adept at determining what people wanted to see and where. What information or answer they were searching for, became the catalyst of numerous ad campaigns and my mission for my clients.
</p>

</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image alt="Co-worker talks about Todd Lambert" filename="hats5.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>
 </div>
 
 
 <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 
  <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image alt="Co-worker talks about Todd Lambert" filename="hats6.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>


 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Analyst</h2>
<p>
Success online is not simply throwing numbers(visitors) at something. I&apos;ve learned to use site analytics to drive the direction of design and development projects creating a prove-it-or-lose-it type of mantra that defines performance and usability.
</p>

</div>
</ScrollAnimation>
 </div>
 {/* SKILLS TIMELINE */}




<div className="container">
<h3 className="logotype" style={{textAlign:'center', fontSize:'250%',}}>
spotlight
</h3>
</div>



</section>




<section className="child" style={{position:'relative', height:'100vh', paddingTop:'100px', overflow:''}}>


<div className=" outer section" style={{paddingTop:'0', overflow:'scrollY',}}>


<div className="container" style={{margin:'50px',}}>
<h3 className="logotype" style={{textAlign:'center', fontSize:'250%',}}>
Resume
</h3>
</div>

<div className="" style={{display:'flex', justifyContent:'center', alignItems:'', position:'relative', width:'100%', margin:'0 auto',}}>



<div className="primary  " style={{color:'#444', }}>

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


<div className="secondary cf p-left" style={{color:'#444',}}>
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

</div>
<BgImage filename="resume-bg1.png" style={{padding:'',}} />
</section>
{/* Panel 3 */}







<section className="child" style={{position:'relative', height:'100vh', zIndex:'3', paddingTop:'100px',}}>
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





