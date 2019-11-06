import React, { Component } from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import Notice from "./components/Notice";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

class App extends Component {
  constructor() {
    super ()
    this.state={
      track: "",
      trackNum: 0,
      trackAlbumId: 0,
      pauseToggle: false,
      noticeModal: false
    };
    this.player = React.createRef();
  }

  handlePlay = (track, trackNum, trackAlbumId) => {
    this.setState({
      track,
      trackNum,
      pauseToggle: false,
      trackAlbumId
    }, async () => {

      const { 
        player: { 
          current 
        }
      } = this
      current.pause();
      current.load();
      current.play();
    })
  }

  handlePause = () => {
    this.player.current.pause();
    this.setState({
      pauseToggle: true
    })
  }

  continuePlay = () => {
    this.player.current.play();
    this.setState({
      pauseToggle: false
    })
  }

  handleModalToggle = () => {
    const { state: { noticeModal } } = this;
    this.setState({
      noticeModal: !noticeModal
    })
  }

  render () {
    const { 
      state: { track, trackNum, pauseToggle, trackAlbumId, noticeModal }, 
      player, 
      handlePlay,
      handlePause,
      continuePlay,
      handleModalToggle
    } = this;
    
    return (
      <Router className="App">
        <Header />
        <Wrapper>
          <Routes 
            onHandlePlayer={handlePlay}
            onHandlePause={handlePause}
            trackNum={trackNum}
            pauseToggle={pauseToggle}
            trackAlbumId={trackAlbumId}
          />
        </Wrapper>
        <Footer />
        <MusicPlayer 
          player={player}
          onHandlePlayer={handlePlay}
          continuePlay={continuePlay}
          onHandlePause={handlePause}
          track={track}
          pauseToggle={pauseToggle}
          onModalToggle={handleModalToggle}
        />
        <Notice 
          noticeModal={noticeModal}
          onModalToggle={handleModalToggle}
        />
      </Router>
    );
  }
}



export default App;
