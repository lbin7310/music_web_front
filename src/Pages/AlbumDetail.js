import React, { Component } from "react";
import styled from "styled-components";
import { getAlbumDetail } from "../api";

const Container = styled.div`
  margin-top: 55px;
`;

class AlbumDetail extends Component {
  constructor (props){
    super(props);
    this.state = {
      coverImgUrl: "아직없음 - fake",
      albumTitle: "Purpose - The 2nd Album - fake",
      saleDate: "2019.10.28 - fake",
      artist: "태연(TEAYEON) - fake",
      genre: "댄스/발라드 - fake",
      planingCompany: "fake - Company"
    }
  }
  async componentDidMount () {
    const { props: {id} } = this;
    const { data: albumDetail} = await getAlbumDetail(id);
    console.log(albumDetail);
  }
  render(props) {
    const { coverImgUrl,
            albumTitle,
            saleDate,
            artist,
            genre,
            planingCompany } = this.state;
    return (
      <Container>
        <div>
          커버사진 : {coverImgUrl}
        </div>
        <div>
          앨범명 : {albumTitle}
        </div>
        <div>
          발매일 : {saleDate}
        </div>
        <div>
          태연 : {artist}
        </div>
        <div>
          장르 : {genre}
        </div>
        <div>
          기획사 : {planingCompany}
        </div>
      </Container>
    )
  }
}

export default AlbumDetail;