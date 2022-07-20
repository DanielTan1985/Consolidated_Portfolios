import React from "react";
import '../../carousel/carousel.css';
import  Carousel  from "../../carousel/Carousel";
import  PF05Writeup from "./PF05Writeup";
import Cards from '../../Cards';

function PF05() {
  const data = [
    {
      image : '/images/ImgPF05/1.PNG',
      caption: `<div> Frontend + Backend Node.js (Personal)</div>`,
    },
    {
      image: "/images/ImgPF05/2.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF05/3.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF05/4.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF05/5.PNG",
      caption: "<div></div>",
    },
    {
      image: "/images/ImgPF05/6.PNG",
      caption: "<div> </div>",
    },
    {
        image: "/images/ImgPF05/7.PNG",
        caption: "<div> </div>",
      },
    {
    image: "/images/ImgPF05/8.PNG",
    caption: "<div> </div>",
    },
    {
        image: "/images/ImgPF05/9.PNG",
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
      <><PF05Writeup /></>
      <Cards />
    </div>
       
  );
}

export default PF05;


