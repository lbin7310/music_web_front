import axios from "axios";

export const getAlbums = () => axios.get("http://localhost:1031/");
export const getAlbumDetail = (id) => axios.get(`http://localhost:1031/album/${id}`);
