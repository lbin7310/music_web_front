import axios from "axios";
import { API_URL } from "./config";

export const getAlbums = () => axios.get(API_URL);
export const getAlbumDetail = (id) => axios.get(`${API_URL}/album/${id}`);
