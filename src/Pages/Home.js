import React, { Component } from "react";
import { getAlbums } from "../api";
import styled from "styled-components";
import Album from "../components/Album";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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