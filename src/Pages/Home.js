import React, { Component } from "react";
import { getAlbums, getAlbumDetail } from "../api";

class Home extends Component {
  constructor () {
    super();
    this.state = {
      something: "Hello"
    }
  }

  async componentDidMount() {
    const { data } = await getAlbums();
    console.log(data);
    const { data: AlbumDetail } = await getAlbumDetail(2);
    console.log(AlbumDetail, "albumDetail")
    this.setState({
      something: "Testing"
    })
  }

  render() {
    const { something } = this.state; 
    return (
      <div>
        {something}
      </div>
    )
  }
}

export default Home;