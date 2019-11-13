import React from 'react';
import styled from 'styled-components';
import { PlayCircle } from 'styled-icons/boxicons-regular/PlayCircle';
import { PauseCircle } from 'styled-icons/boxicons-regular/PauseCircle';
import { StopCircle } from 'styled-icons/boxicons-regular/StopCircle';

const Container = styled.div`
  position: fixed;
  right: 20px;
  bottom: 75px;
  z-index: 100;
  border-radius: 25px;
  background-color: #0652dd;
  color: white;
  box-shadow: 2px 5px 5px -2px rgba(0, 0, 0, 0.6);
`;

const PlayButton = styled(PlayCircle)`
  width: 50px;
  border-radius: 25px;
`;
const PauseButton = styled(PauseCircle)`
  width: 50px;
  border-radius: 25px;
`;

const StopButton = styled(StopCircle)`
  width: 50px;
  border-radius: 25px;
`;

const Audio = styled.audio``;

const Source = styled.source``;

const MusicPlayer = props => {
  const {
    player,
    continuePlay,
    track,
    onHandlePause,
    pauseToggle,
    onModalToggle,
    onHandleStop,
    currentTime
  } = props;
  return (
    <Container>
      {!track ? (
        <PlayButton onClick={() => onModalToggle()} />
      ) : track && !pauseToggle ? (
        <div>
          <PauseButton onClick={() => onHandlePause(player.current)} />
          <StopButton onClick={() => onHandleStop()} />
        </div>
      ) : currentTime === 0 ? (
        <PlayButton onClick={() => continuePlay()} />
      ) : (
        <div>
          <PlayButton onClick={() => continuePlay()} />
          <StopButton onClick={() => onHandleStop()} />
        </div>
      )}

      <Audio ref={player} onEndedCapture={onHandlePause}>
        <Source src={track} />
      </Audio>
    </Container>
  );
};

export default MusicPlayer;
