import React, { Component } from 'react';
import styled from 'styled-components';
import banner from '../assets/images/banner.jpg'
import {Link} from 'react-router-dom';  

class Banner extends Component {

    render() { 
        return (
           <BannerWrapers>
               <div className ="box-content">
               <h1>Search Best Movies </h1> 
              <Link to ='/movies' > Search </Link> 
              </div>
           </BannerWrapers>
          );
    }
}

const BannerWrapers =styled.section`
background-image: linear-gradient(180deg, #FFFFFF 0%, #6284ff2e 50%, #ff0000ad 100%),url(${banner});
height:100vh;
background-size:cover ;
position:relative;

.box-content{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%)
}
h1{
    font-size:50px;
    color:black;
}
a{
background-color:red;
width:30%;
display:block;
text-align:center;
color:#000;
font-weight:700;
border-radius:100px;
padding:7px;
margin:40px auto;
}
a:hover{
    text-decoration:none;
}
`

export default Banner ;