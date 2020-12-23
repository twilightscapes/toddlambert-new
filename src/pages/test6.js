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
import Navbar from '../components/Navbar2'
import Contact from '../components/Contact-inc'

const CustomBox = styled.div`

.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}




.slider{z-index:-1;}


//  SLIDE



#vidpop {
  display: block;
  text-align:center;
}

label + input[type=checkbox]{
display:none !important;
} 
 
input[type=checkbox]:checked + label div{
  transform:rotate(0) !important; transform: scale(1.2) !important; width:40vw !important; position:relative !important; top:-10vh !important; left:0 !important; transition: all 2s ease;
  z-index:1;
} 

input[type=checkbox]:checked + label div label{display:block !important; cursor:pointer;}


#vid-toggle:checked + #vidpop .sub{display:none !important;}

#vid-open{
  position:absolute; bottom:0; display:block; width:100%; height:100%;  z-index:1; cursor:pointer;
  // background:#fff;
}



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




`





const Test6 = () => (
  <Layout>
   <CustomBox>
  

<Navbar />


<div className="container2" style={{position:'', top:'', height:'', display:'', overflowY:'scroll'}}>




	
{/*  Panel 1 */}
<section className="child" style={{position:'relative', height:'100vh', overflow:''}}>


<Image className="slider1" alt="Todd Stars" filename="ad2-home-banner.jpg"  />

  </section>
{/*  Panel 1 */}



{/*  Panel 2 */}
<section className="child" style={{position:'relative', height:'100vh'}}>

<Image className="slider1" alt="Todd Stars" filename="ad2-home-banner.jpg"  />

</section>
{/*  Panel 2 */}


{/*  Panel 3 */}
<section className="child" style={{position:'relative', height:'100vh'}}>


<ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={0}>
  <h1 style={{textAlign:'center', fontSize:'200%'}}>We Grow Business!</h1>
</ScrollAnimation>


<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={300}>
<p>We recognize every business is unique, and we treat each client as the unique partner they are.  We have been creating results-driven marketing for clients across the Southeast for more than 20 years.</p>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={400}>
<p>Ad2 understands the importance of relevant data as the foundation for effective campaigns. Your message must connect your brand with your audience and effectively communicate  the differentiating benefits of your products, values, and services.</p>

<blockquote>Your customers must know who you are,

what you can do for them and

why they want to choose you.</blockquote>
   </ScrollAnimation>

   <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={500}>
  <p>At Ad2, we work with each of our clients to develop and implement strategic marketing tactics to increase market share while improving customer retention through enhanced customer relationships and new customer acquisition strategies.</p>
</ScrollAnimation>



<BgImage filename="ad2-home-banner.jpg" style={{padding:'40px'}} />



</section>
{/* Panel 3 */}



<section className="child" style={{position:'relative', height:'100vh'}}>
<div className="outer"> 
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={400}>
  <p style={{textAlign:'center', margin:'.6rem 0 0 0', fontSize:'120%', background:'#222', color:'#fff'}}><strong>Wanna know more?</strong></p>
  </ScrollAnimation>


  <div className="outer"> <Contact /></div> 

</div>
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


<Footer />

</section>




</div>{/* End Container2 */}

</CustomBox>
  </Layout>
)

export default Test6





