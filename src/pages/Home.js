import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import Hero from '../components/Hero/Hero';
import SectionOne from '../components/Home/SectionOne';
import * as actionTypes from '../redux/actionTypes';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';

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
      {loading && (
        <div
          style={{ height: '100vh', color: 'var(--bg-color)' }}
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
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
