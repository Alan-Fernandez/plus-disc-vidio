import { API_KEY } from "./secrets.mjs";
import{getTrendingMoviesPreview} from "./T-M-Preview.mjs"
import { getCategoriesPreview } from "./CategoriesPreview.mjs";


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
    "language": "es-ES"
  },
});

const URL_API = api('trending/movie/day')
const genres = api('genre/movie/list');

getTrendingMoviesPreview(URL_API);
getCategoriesPreview(genres);

