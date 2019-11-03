import React, {Component} from "react";
import styled from "styled-components";
import TrackList from "./TrackList";

const AlbumInfoContainer = styled.div``

const Audio = styled.audio``;

const AudioSource = styled.source``;

class AlbumInfo extends Component {
  constructor() {
    super()
    this.state={
      audioSrc:"",
      trackNum: 0,
      pauseToggle: false
    };
    this.testAudio = React.createRef();
  }

  handleAudioPlay = (audioSrc, trackNum) => {
    this.setState({
      audioSrc,
      trackNum,
      pauseToggle: false
    },function(){
      this.testAudio.current.pause();
      this.testAudio.current.load();
      this.testAudio.current.play();
    })
  }

  handleAudioPause = () => {
    this.testAudio.current.pause();
    this.setState({
      pauseToggle: true
    })
  }
  
  render() {
    const { props: {albumDetail},
            state: {audioSrc, trackNum, pauseToggle},
            refs } = this;
    const { testAudio,
            handleAudioPause,
            handleAudioPlay } = this; 
  return (
    <AlbumInfoContainer>
      <div>
        커버사진 : {albumDetail.coverImgUrl}
      </div>
      <div>
        앨범명 : {albumDetail.title} 
      </div>
      <div>
        발매일 : {albumDetail.saleDate}
      </div>
      <div>
        아티스트 : {albumDetail.artist}
      </div>
      <div>
        장르 : {albumDetail.genre}
      </div>
      <div>
        기획사 : {albumDetail.planingCompany}
      </div>
      { albumDetail.songs ? 
        albumDetail.songs.map( (song, idx) => { 
          return <TrackList 
                    song={song} 
                    key={song.id} 
                    id={idx} 
                    refs={refs}
                    trackNum={trackNum}
                    pauseToggle={pauseToggle}
                    onPlay={handleAudioPlay}
                    onPause={handleAudioPause}
                  />
        }) 
        : "" }
        <Audio ref={testAudio} onEndedCapture={handleAudioPause}>
          <AudioSource src={audioSrc}/> 
        </Audio>
    </AlbumInfoContainer>
  )}
}

export default AlbumInfo;