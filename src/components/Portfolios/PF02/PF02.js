import React from "react";
import '../../carousel/carousel.css';
import  Carousel  from "../../carousel/Carousel";
import  PF02Writeup from "./PF02Writeup";
import Cards from '../../Cards';

function PF02() {
  const data = [
    {
      image : '/images/ImgPF02/1.PNG',
      caption: `<div> Backend Node.js (Collaboration)</div>`,
    },
    {
      image: "/images/ImgPF02/2.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF02/3.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF02/4.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF02/5.PNG",
      caption: "<div></div>",
    },
    {
        image: "/images/ImgPF02/6.PNG",
        caption: "<div></div>",
      },
    {
    image: "/images/ImgPF02/7.PNG",
    caption: "<div></div>",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };


  return (

    <div className="Carousel">
      <div style={{ textAlign: "center"}}>
        <div
          style={{
            padding: "0 10px",
          }}
        >
          <Carousel
            data={data}
            time={5000}
            width="1152px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="fill"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "1152px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
      <PF02Writeup />
      <Cards />
    </div>
       
  );
}

export default PF02;


