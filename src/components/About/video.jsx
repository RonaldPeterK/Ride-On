import React from 'react';
import { Player, BigPlayButton, ControlBar  } from 'video-react';
import Poster from './../RideON/assets/Home/img-7.jpg';
import Sample from "./../RideON/assets/Home/sample.mp4"
import './video.css'
function Video () {
  return (
    <Player
      playsInline
      poster={Poster}
      src={Sample}
    >
    <BigPlayButton position="center" />
    <ControlBar autoHide={false} className="my-class" />
    </Player>
  );
};
export default Video