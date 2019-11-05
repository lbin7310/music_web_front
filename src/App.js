import React, { Component } from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 55px;
  height: 100%;
`

class App extends Component {
  constructor() {
    super ()
    this.state={
      track: "",
      trackNum: 0,
      pauseToggle: false,
      trackAlbumId: 0
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

  render () {
    const { 
      state: { track, trackNum, pauseToggle, trackAlbumId }, 
      player, 
      handlePlay,
      handlePause,
      continuePlay
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
        <MusicPlayer 
          player={player}
          onHandlePlayer={handlePlay}
          continuePlay={continuePlay}
          onHandlePause={handlePause}
          track={track}
          pauseToggle={pauseToggle}
        />
        <Footer />
      </Router>
    );
  }
}



export default App;
