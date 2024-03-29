
import Layout from '../../components/Layout';

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
import GalleryMenu from '../../components/GalleryMenu'
import { FiZoomIn } from 'react-icons/fi'



import Gallery from '../../components/Gallery'


import styled from "styled-components"
const CustomBox = styled.div`

#portfolio {
	position:relative;
background: #da071c ;

}

// .intro:before{
// 	content: "Print";

// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:480%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// }





@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1);}
}

/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/

`


const gal8Query = graphql`
  query gal8Query {
    allFile(filter: { relativeDirectory: { eq: "gallery1" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const Gal8Page = () => {
  const data = useStaticQuery(gal8Query)
  return (
	  <CustomBox>
    <Layout>
    


      
    <div className="contentStart">
      
      <GalleryMenu />
  




 
      
 
      
      <div className="container" style={{ padding:'0', margin:'0', zIndex:'0'}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>


      <div className="zoomer" style={{display:'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:'1', marginTop:'85px'}}>
      <h4 style={{display:'', color:'#fff', fontSize:'100%', textAlign:'center', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', position:'fixed', bottom:'5vh', opacity:'.9',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</h4>
      </div>

      
       <GalleryMenu />
      
      </div>
      
    </Layout>
    </CustomBox>  )
}

export default Gal8Page
