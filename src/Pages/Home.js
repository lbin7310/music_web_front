import React, { Component } from "react";
import { getAlbums } from "../api";
import styled from "styled-components";
import Album from "../components/Album";

const Container = styled.div`
  padding-top: 20px;
  padding-left: 3.5%;
  padding-right: 3.5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  @media (max-width : 320px) {
    padding: 20px 0 0 0;
  }
`;

class Home extends Component {
  constructor () {
    super();
    this.state = {
      albums: []
    }
  }

  async componentDidMount() {
    const { data: albums } = await getAlbums();
    this.setState({
      albums
    })
  }

  render() {
    const { state: { albums } } = this;
    return (
      <Container>
        {
          albums.map( album => {
            return <Album album={album} key={album.albumId}/>
          })
        }
      </Container>
    )
  }
}

export default Home;