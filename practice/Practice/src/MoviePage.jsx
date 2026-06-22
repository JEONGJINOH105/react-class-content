import MovieCard from "./component/MovieCard";

function MoviePage() {
  return (
    <div>
      <h2>이번 주 추천 영화</h2>

      <MovieCard />
      <MovieCard />
      <MovieCard />

    </div>
  );
}

export default MoviePage;