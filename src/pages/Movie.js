import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as actionTypes from '../redux/actionTypes';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MovieReview from '../components/MovieDetail/MovieReview';
import MovieTrailer from '../components/MovieDetail/MovieTrailer';
import SimilarMovies from '../components/MovieDetail/SimilarMovies';
import NotFound from '../components/NotFound/NotFound';

const Movie = ({ movie, loading }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_SINGLE_MOVIE_REQUEST, payload: id });
  }, [dispatch, id]);

  return (
    <>
      {!loading && movie.similars && (
        <>
          <MovieDetail movie={movie.movieDetail} />
          <MovieReview reviews={movie.reviews} />
          <MovieTrailer videos={movie.videos} />
          <SimilarMovies similars={movie.similars} />
        </>
      )}
      {loading && <LoadingSpinner />}
      {!loading &&
        movie?.movieDetail &&
        movie.movieDetail.success === false && (
          <NotFound
            child={<h1>The movie you searched could not be found.</h1>}
          />
        )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.singleMovieReducer,
    loading: state.loadingReducer.loading,
  };
};

export default connect(mapStateToProps)(Movie);
