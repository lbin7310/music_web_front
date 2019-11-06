import React, { Component } from "react";
import styled from "styled-components";
import { getAlbumDetail } from "../api";
import AlbumInfo from "../components/AlbumInfo";

const Container = styled.div`
`;

class AlbumDetail extends Component {
  constructor (props){
    super(props);
    this.state = {
      albumDetail: {}
    }
  }
  
  async componentDidMount () {
    const { props: {id} } = this;
    const getData = await getAlbumDetail(id);
    const albumDetail = getData.data[0];
    this.setState({
      albumDetail
    })
  }

  render() {
    const { state: { albumDetail },
            props: { onHandlePlayer, onHandlePause, trackNum, pauseToggle, id, trackAlbumId } 
          } = this;
    return (
      <Container>
        <AlbumInfo 
          albumDetail={albumDetail}
          onHandlePlayer={onHandlePlayer}
          onHandlePause={onHandlePause}
          trackNum={trackNum}
          albumId={id}
          pauseToggle={pauseToggle}
          trackAlbumId={trackAlbumId}
        />
      </Container>
    )
  }
}

export default AlbumDetail;