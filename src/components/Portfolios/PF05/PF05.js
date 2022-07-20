import React from "react";
import '../../carousel/carousel.css';
import  Carousel  from "../../carousel/Carousel";
import  PF05Writeup from "./PF05Writeup";
import Cards from '../../Cards';
///images/ImgPF05/1.PNG

function PF05() {
  const data = [
    {
      image : 'https://i.postimg.cc/5ybCQKM9/1.png',
      caption: `<div> Frontend + Backend Node.js (Personal)</div>`,
    },
    {
      image: "https://i.postimg.cc/FKnZX43t/2.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/QNkkb1CK/3.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/SsmHK8K0/4.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/3xmK4X3W/5.png",
      caption: "<div></div>",
    },
    {
      image: "https://i.postimg.cc/PJCHtZ6X/6.png",
      caption: "<div> </div>",
    },
    {
        image: "https://i.postimg.cc/633J0nxr/7.png",
        caption: "<div> </div>",
      },
    {
    image: "https://i.postimg.cc/W1v47WW0/8.png",
    caption: "<div> </div>",
    },
    {
        image: "https://i.postimg.cc/mDzR4Cpb/9.png",
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


