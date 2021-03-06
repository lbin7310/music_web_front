import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  justify-self: center;
  margin-bottom: 20px;
  box-shadow: 4px 5px 2px 0px rgba(0, 0, 0, 0.2);
`;

const AlbumDetailLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const AlbumFigure = styled.figure`
  padding: 0;
  margin: 0;
  border: 1px solid #3b3b98;
  width: 150px;
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

const AlbumTitle = styled.div`
  font-size: 15px;
`;

const Artist = styled.div`
  font-size: 13px;
  color: #808e9b;
`;

export default props => {
  const {
    album: { id, title, artist, coverImgUrl },
  } = props;
  return (
    <Container>
      <AlbumDetailLink
        to={{
          pathname: `/album/${title}`,
          state: {
            id,
          },
        }}
      >
        <AlbumFigure>
          <AlbumImg
            src={coverImgUrl}
            alt={`앨범 ${title} 아티스트 ${artist}`}
          />
          <AlbumFigcaption>
            <AlbumTitle>{title}</AlbumTitle>
            <Artist>{artist}</Artist>
          </AlbumFigcaption>
        </AlbumFigure>
      </AlbumDetailLink>
    </Container>
  );
};
