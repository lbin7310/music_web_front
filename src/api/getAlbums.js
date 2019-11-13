import axios from "axios";
import { API_URL } from "../config";

const getAlbums = () => axios.get(API_URL);

export default getAlbums;
