import React from "react";
import '../../carousel/carousel.css';
import  Carousel  from "../../carousel/Carousel";
import  PF01Writeup from "./PF01Writeup";
import Cards from '../../Cards';

function PF01() {
  const data = [
    {
      image : '/images/ImgPF01/1.PNG',
      caption: `<div> Frontend React (Collaboration)</div>`,
    },
    {
      image: "/images/ImgPF01/2.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF01/3.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF01/4.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF01/5.PNG",
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
      <PF01Writeup />
      <Cards />
    </div>
       
  );
}

export default PF01;


