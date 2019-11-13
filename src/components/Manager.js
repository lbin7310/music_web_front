import React from 'react';
import styled from 'styled-components';
import Routes from '../routes';
import MusicPlayer from './MusicPlayer';
import Notice from './Notice';

const Wrapper = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class Manager extends React.Component {
  constructor() {
    super();
    this.state = {
      track: '',
      trackNum: 0,
      trackAlbumId: 0,
      pauseToggle: false,
      noticeModal: false,
      currentTime: 0
    };
    this.player = React.createRef();
  }

  handlePlay = (track, trackNum, trackAlbumId) => {
    this.setState(
      {
        track,
        trackNum,
        pauseToggle: false,
        trackAlbumId
      },
      async () => {
        const {
          player: { current }
        } = this;
        current.pause();
        current.load();
        current.play();
      }
    );
  };

  handlePause = () => {
    this.player.current.pause();
    const { currentTime } = this.player.current;
    this.setState({
      pauseToggle: true,
      currentTime
    });
  };

  continuePlay = () => {
    this.player.current.play();
    this.setState({
      pauseToggle: false
    });
  };

  handleStop = () => {
    this.player.current.pause();
    this.player.current.currentTime = 0;
    this.setState({
      pauseToggle: true,
      currentTime: 0
    });
  };

  handleModalToggle = () => {
    const {
      state: { noticeModal }
    } = this;
    this.setState({
      noticeModal: !noticeModal
    });
  };

  render() {
    const {
      state: {
        track,
        trackNum,
        pauseToggle,
        trackAlbumId,
        noticeModal,
        currentTime
      },
      player,
      handlePlay,
      handlePause,
      handleStop,
      continuePlay,
      handleModalToggle
    } = this;
    return (
      <div>
        <Wrapper>
          <Routes
            onHandlePlayer={handlePlay}
            onHandlePause={handlePause}
            trackNum={trackNum}
            pauseToggle={pauseToggle}
            trackAlbumId={trackAlbumId}
          />
        </Wrapper>
        <MusicPlayer
          player={player}
          onHandlePlayer={handlePlay}
          continuePlay={continuePlay}
          onHandlePause={handlePause}
          track={track}
          pauseToggle={pauseToggle}
          onModalToggle={handleModalToggle}
          onHandleStop={handleStop}
          currentTime={currentTime}
        />
        <Notice noticeModal={noticeModal} onModalToggle={handleModalToggle} />
      </div>
    );
  }
}

export default Manager;
