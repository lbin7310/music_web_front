import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  justify-self: center;
  margin-bottom: 20px;
`;

const AlbumDetailLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const AlbumFigure = styled.figure`
  padding: 0;
  margin: 0;
  border: 1px solid black;
  width: 150px;
  border-radius: 2px;
`;

const AlbumImg = styled.img`
  width: 100%;
  height: 150px;
`;

const AlbumFigcaption = styled.figcaption`
  padding: 0 5px 5px 5px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AlbumTitle = styled.div``;

const Artist = styled.div`
  font-size: 15px;
  color: #808e9b;
`;

export default (props) => {
  const { album: {albumId, title, artist, coverImgUrl} } = props;
  return (
    <Container>
      <AlbumDetailLink to={`/album/${albumId}`}>
        <AlbumFigure>
          <AlbumImg src={coverImgUrl}/>
          <AlbumFigcaption>
            <AlbumTitle>
              {title}
            </AlbumTitle>
            <Artist>
              {artist}
            </Artist>
          </AlbumFigcaption>
        </AlbumFigure>
      </AlbumDetailLink>
    </Container>
  )
}