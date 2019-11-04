import React, {Component} from "react";
import styled from "styled-components";
import TrackList from "./TrackList";

const AlbumInfoContainer = styled.div``;

const Audio = styled.audio``;
const AudioSource = styled.source``;

const CoverContainer = styled.div`
`;
const AlbumCover = styled.img`
  width: 100%;
`;
const AlbumContents = styled.div`
  margin-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 5%;
`;
const Content = styled.div`
  width: 80%;
  padding-bottom: 5px ;
`;
const Subject = styled.div`
  font-size: 24px;
`;
const Tracks = styled.div`
  margin-top: 20px;
`;

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
      <CoverContainer>
        <AlbumCover src={albumDetail.coverImgUrl} />
      </CoverContainer>
      <AlbumContents>
        <Content>
          앨범명 : {albumDetail.title} 
        </Content>
        <Content>
          발매일 : {albumDetail.saleDate}
        </Content>
        <Content>
          아티스트 : {albumDetail.artist}
        </Content>
        <Content>
          장르 : {albumDetail.genre}
        </Content>
        <Content>
          기획사 : {albumDetail.planingCompany}
        </Content>
        <Tracks>
          <Subject>수록곡</Subject>
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
        </Tracks>
      </AlbumContents>
      <Audio ref={testAudio} onEndedCapture={handleAudioPause}>
        <AudioSource src={audioSrc}/> 
      </Audio>
    </AlbumInfoContainer>
  )}
}

export default AlbumInfo;