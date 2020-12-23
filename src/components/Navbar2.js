import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/ad2inc-logo-round.svg'
// import Headroom from "react-headroom"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { GoArrowUp } from 'react-icons/go';
import { WiDaySunny } from 'react-icons/wi';
// import Image from './Image'
import PopContact from './PopContact'
// import ScrollAnimation from 'react-animate-on-scroll'

import styled from 'styled-components'
const CustomBox = styled.div`




}


.header1 {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    // background-color: #FC466B;
    position: fixed;
    height: 60px!important;
    overflow: hidden;
    z-index: 10;
}
#sidebarMenu {
    height: 100%;
    position: fixed;
    z-index:2;
    right: 0;
    width: 250px;
    // margin-top: 60px;
    transform: translateX(250px);
    transition: transform 250ms ease-in-out;
    // background: linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%);
      background: rgba(196,22,37,.9);
      border-left:1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner{
    margin:60px 0 0 0;
    padding:0;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li{
    list-style: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li span{
    display: block;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.70);
}
.sidebarMenuInner li a{
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}
input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
}
input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}
.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: fixed;
    z-index: 3;
    height: 100%;
    width: 100%;
    top: 22px;
    right: 22px;
    height: 42px;
    width: 42px;
}
.spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 5px;
    width: 100%;
    background-color: #fff;
}
.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 5px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 5px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -14px;
}
.header{background:transparent !important; width:auto;}
.modal-btn{box-shadow:none;}
.modal-btn:hover{background:#222;}




.intro:before{
	content: "About Twilightscapes";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}



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

const Navbar2 = class extends React.Component {
  
/* eslint-disable */

  render() {
    return (
	    
      <CustomBox>         
{/* <Headroom style={{ zIndex: '5', }}></Headroom> */}


{/* <header className="header" style={{zIndex:'2', position:'relative'}}> */}


      

      


    {/* <img id="logo" className="logo rollIn" src={logo} alt="Ad2Inc Logo" style={{position:'fixed',}} /> */}
    {/* <Image alt="Temp Graphic" filename="ad2inc-logo-round.png" /> */}

{/* </header> */}


<div style={{display:'flex', justifyContenr:'center'}}>

<a class="logolink" title="Logo - Back To Home" href="/" style={{textAlign:'center', fontSize:'80px', marginLeft:'10vw', marginTop:'2vh', textDecoration:'none'}}><span class="logofirst">todd</span> <span class="logocolor">lambert</span></a>


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
 
</div>



  



  
            
      
      
   
   
    
      
      

      

</CustomBox>
      
      
    )
  }
}

export default Navbar2