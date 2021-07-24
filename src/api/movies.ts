import { AxiosRequestConfig } from "axios";
import { Movie, Movies } from "../@types/wookie-movies";
import { BaseAPI } from "../utils/api";
import { AXIOS_CONFIG } from "../utils/constants";

class MoviesAPI extends BaseAPI {
  public constructor(config: AxiosRequestConfig) {
    super(config);

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  public async fetchMovies(search: string): Promise<Movie[]> {
    const res = await this.get<Movies>(`/movies?q=${search}`);
    return res.data.movies;
  }
}

export const moviesAPI = new MoviesAPI(AXIOS_CONFIG);
