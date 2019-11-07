import React from "react";
import styled from "styled-components";
import TrackList from "./TrackList";
import { ArrowBackIos } from "styled-icons/material/ArrowBackIos";
import { Link } from "react-router-dom";

const AlbumInfoContainer = styled.div``;

const CoverContainer = styled.div``;

const AlbumCover = styled.img`
  width: 100%;
`;
const AlbumContents = styled.div`
  padding: 5%;
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

const BackLink = styled(Link)`
  position: fixed;
  top: 15px;
  right: 0;
  margin-right: 3%;
  z-index: 100;
  color: white;
`;

const BackButton = styled(ArrowBackIos)`
  height: 25px; 
`;

export default props => {
  const { albumDetail, 
          onHandlePlayer, 
          onHandlePause, 
          trackNum, 
          pauseToggle,
          albumId,
          trackAlbumId
        } = props;
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
                        trackNum={trackNum}
                        pauseToggle={pauseToggle}
                        onHandlePlayer={onHandlePlayer}
                        onHandlePause={onHandlePause}
                        albumId={albumId}
                        trackAlbumId={trackAlbumId}
                      />
            }) 
            : "" }
        </Tracks>
        <BackLink to="/">
          <BackButton />
        </BackLink>
      </AlbumContents>
    </AlbumInfoContainer>
  )
};
