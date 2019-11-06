import React from "react";
import styled from "styled-components";
import { Play } from "styled-icons/boxicons-regular/Play"
import { Pause } from "styled-icons/boxicons-regular/Pause"

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 0.75fr 4fr 1fr;
  grid-template-areas: "a b c";
`;

const Number = styled.div`
  grid-area: a;
  align-self: center;
`;

const Song = styled.div`
  grid-area: b;
  align-self: center;
  font-size: 14px;
`;

const PlayButton = styled(Play)`
  height: 35px;
  justify-self: center;
`;
const PauseButton = styled(Pause)`
  height: 35px;
  justify-self: center;
`;

export default (props) => {
  const { song, 
          id, 
          trackNum, 
          pauseToggle,
          onHandlePlayer,
          onHandlePause,
          albumId,
          trackAlbumId
        } = props;

  return (
     <Container>
        <Number>{id + 1}</Number>
        <Song>{song.title}</Song>
        { trackNum === (id + 1) && !pauseToggle && albumId === trackAlbumId 
          ? <PauseButton onClick={()=>{onHandlePause(song.musicFileUrl)}} /> 
          : <PlayButton onClick={()=>{onHandlePlayer(song.musicFileUrl, id + 1, albumId)}} />
        }
     </Container>
   )
  };
