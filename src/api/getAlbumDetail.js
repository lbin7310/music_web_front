import axios from "axios";
import { API_URL } from "../config";

const getAlbumDetail = id => axios.get(`${API_URL}/album/${id}`);

export default getAlbumDetail;
