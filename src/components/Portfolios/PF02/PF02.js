import React from "react";
import '../../carousel/carousel.css';
import  Carousel  from "../../carousel/Carousel";
import  PF02Writeup from "./PF02Writeup";
import Cards from '../../Cards';
//image : "/images/ImgPF02/1.PNG",

function PF02() {
  const data = [
    {
      image : "https://i.postimg.cc/KY36ZvpR/1.png",
      caption: `<div> Backend Node.js (Collaboration)</div>`,
    },
    {
      image: "https://i.postimg.cc/Jh8NhpPZ/2.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/y8HjJ6ND/3.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/mDtyxtm5/4.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/d1bdznkh/5.png",
      caption: "<div></div>",
    },
    {
        image: "https://i.postimg.cc/tT28Q4Ft/6.png",
        caption: "<div></div>",
      },
    {
    image: "https://i.postimg.cc/7Yyts7v8/7.png",
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


