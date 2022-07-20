import React from "react";
import '../../carousel/carousel.css';
import  Carousel  from "../../carousel/Carousel";
import  PF03Writeup from "./PF03Writeup";
import Cards from '../../Cards';

function PF03() {
  const data = [
    {
      image: "/images/ImgPF03/S1.PNG",
      caption: `<div> Frontend React Native (Collaboration) </div>`,
    },
    {
      image: "/images/ImgPF03/S2.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF03/S3.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF03/S4.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF03/S5.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF03/S6.PNG",
      caption: "<div> </div>",
    },
    {
        image: "/images/ImgPF03/7.PNG",
        caption: "<div> </div>",
    },
    {
        image: "/images/ImgPF03/8.PNG",
        caption: "<div> </div>",
      },
      {
        image: "/images/ImgPF03/9.PNG",
        caption: "<div> </div>",
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
            slideBackgroundColor="black"
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
      <PF03Writeup />
      <Cards />
    </div>
       
  );
}

export default PF03;


