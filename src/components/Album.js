import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px 10px;
`;

const AlbumDetailLink = styled(Link)`
  text-decoration: none;
`;

const AlbumFigure = styled.figure`
  padding: 0;
  margin: 0;
  display: inline-block;
  border: 1px solid black;
  width: 150px;
`;

const AlbumImg = styled.img``;

const AlbumFigcaption = styled.figcaption``;

const AlbumTitle = styled.div``;

const Artist = styled.div``;

export default (props) => {
  const { album: {albumId, title, artist} } = props;
  return (
    <Container>
      <AlbumDetailLink to={`/album/${albumId}`}>
        <AlbumFigure>
          <AlbumImg />
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