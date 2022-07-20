import React from "react";
import '../../carousel/carousel.css';
import  Carousel  from "../../carousel/Carousel";
import  PF03Writeup from "./PF03Writeup";
import Cards from '../../Cards';
///images/ImgPF03/1.PNG

function PF03() {
  const data = [
    {
      image: "https://i.postimg.cc/L5zgW6C9/1.png",
      caption: `<div> Frontend React Native (Collaboration) </div>`,
    },
    {
      image: "https://i.postimg.cc/vByszYVL/2.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/9Xx64tJB/3.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/PJrNSzw4/4.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/nrPV08ZF/5.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/wB4668yh/6.png",
      caption: "<div> </div>",
    },
    {
        image: "https://i.postimg.cc/2S2YwRxP/7.png",
        caption: "<div> </div>",
    },
    {
        image: "https://i.postimg.cc/c1wNz8m7/8.png",
        caption: "<div> </div>",
      },
      {
        image: "https://i.postimg.cc/2yFMShcP/9.png",
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


