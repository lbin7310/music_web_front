import React from "react";
import styled from "styled-components";

const Container = styled.div`

`;

const Number = styled.div``;

const Song = styled.div``;

const PlayButton = styled.button`
  color: white;
  background-color: blue;
`;

const PauseButton = styled.button`
  color: white;
  background-color: blue;
`;



export default (props) => {
  const { song, 
          onPlay, 
          onPause, 
          id, trackNum, pauseToggle } = props;
  return (
     <Container>
        <Number>{id + 1}</Number>
        <Song>{song.title}</Song>
        { trackNum === (id + 1) && !pauseToggle ? <PauseButton onClick={()=>{onPause(song.musicFileUrl)}}>PAUSE</PauseButton> :
          <PlayButton onClick={()=>{onPlay(song.musicFileUrl, id + 1)}}>
            PLAY
          </PlayButton>
        }
     </Container>
   )
  };
