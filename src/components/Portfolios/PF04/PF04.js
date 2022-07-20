import React from "react";
import '../../carousel/carousel.css';
import  Carousel  from "../../carousel/Carousel";
import  PF04Writeup from "./PF04Writeup";
import Cards from '../../Cards';
///images/ImgPF04/1.PNG

function PF04() {
  const data = [
    {
      image : 'https://i.postimg.cc/B6DwmkFT/1.png',
      caption: `<div> Pet project (Personal)</div>`,
    },
    {
      image: "https://i.postimg.cc/mkjjqsgH/2.jpg",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/fW1Yzy6R/3.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/ZRG0SBCk/4.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/kGPMH0pq/5.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/hGmHYXWQ/6.png",
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
      <><PF04Writeup /></>
      <Cards />
    </div>
       
  );
}

export default PF04;


