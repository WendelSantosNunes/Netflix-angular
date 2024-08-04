export interface Movie {
  adulf?: boolean,
  backdrop_path?: string;
  first_air_date?: string;
  genre_ids?: number[];
  id: number;
  name?: string;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  original_title: string,
  overview?: string;
  popularity?: number;
  release_date: string;
  title: string;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetailsResponse{
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any | null; // Ajuste se você tiver uma estrutura mais específica para coleções
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number,
    logo_path: string | null,
    name: string,
    origin_country: string}[];
  production_countries: {
    iso_3166_1: string,
    name: string,
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string,
    iso_639_1: string,
    name: string
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
