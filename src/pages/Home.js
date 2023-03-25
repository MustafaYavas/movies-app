import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import Hero from '../components/Hero/Hero';
import SectionOne from '../components/Home/SectionOne';
import * as actionTypes from '../redux/actionTypes';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const Home = ({ allMovies, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_MOVIE_REQUEST });
  }, [dispatch]);

  return (
    <div>
      {!loading && allMovies?.heroMovies?.length > 0 && (
        <>
          <Hero heroMovies={allMovies.heroMovies} />
          <SectionOne movies={allMovies} />
          <SectionTwo movie={allMovies.popularMovies[9]} />
          <SectionThree movies={allMovies.popularMovies.slice(0, 5)} />
        </>
      )}
      {loading && <LoadingSpinner />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allMovies: state.movieReducer,
    loading: state.loadingReducer.loading,
  };
};

export default connect(mapStateToProps)(Home);
