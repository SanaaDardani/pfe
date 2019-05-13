import React, { Component } from "react";

const video =() => {
      return (
            <iframe src='https://youtube.com/embed/Hvdbvr_ITZk'
              allow='autoplay; encrypted-media'
              allowFullScreen
              width="100%" 
              height="500"
              title='video'
              style={{overflow:'hidden',border:'none'}}
              />
      );
  }
export default video;
