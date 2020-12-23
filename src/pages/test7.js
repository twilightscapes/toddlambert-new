import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
// import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from '../components/Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { FiCornerRightDown } from 'react-icons/fi'

// import Contact from '../components/Contact-inc'

const CustomBox = styled.div`

.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}






.container2 {
	overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height:100vh;
}

section {
	scroll-snap-align: start;
  border-bottom:2px solid red !important;
  overflow:hidden;
  height:100vh;
}

.slider1{
  position:fixed; 
  top:0;
  width:100vw;
  height:100vh;
  display:block;
  background-size:cover;
  min-height:100vh;
}




`


// const gra = function(min, max) {
// 	return Math.random() * (max - min) + min;
// };
// const init = function() {
// 	let items = document.querySelectorAll("section");
// 	for (let i = 0; i < items.length; i++) {
// 		items[i].style.minHeight = gra(120, 205) + "vh";
// 	}


// };
// init();



const Test7 = () => (
  <Layout>
   <CustomBox>
  
<div className="container2" style={{position:'', top:'', height:'', display:''}}>




	
    <div style={{}}></div>
<section className="child" style={{position:'', height:'100vh', overflow:'hiden'}}>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} delay={0} offset={0} style={{zIndex:'-5', position:'', top:'0'}}>    
<Image className="slider1" alt="Todd Stars" filename="ad2-home-banner.jpg" />
</ScrollAnimation>
  </section>
{/* END Panel 1 */}




  <section className="child" style={{position:'', height:'100vh'}}>
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} animatePreScroll={false} delay={0} style={{zIndex:'-4', position:'', top:'0'}}>
<Image className="slider1" alt="Todd Stars" filename="ad2-banner-pnb.jpg"  />
</ScrollAnimation>
</section>
{/* END Panel 2 */}



  <section className="child" style={{position:'', height:'100vh'}}>
 <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} animatePreScroll={false} delay={0} style={{zIndex:'-3', position:'', top:'0'}}>
<Image className="slider1" alt="Todd Stars" filename="ad2-banner-jcdef.jpg" />
</ScrollAnimation>
</section>
{/* END Panel 3 */}





{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}


<Footer />


</div>


</CustomBox>
  </Layout>
)

export default Test7





