import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Movie from './pages/Movie';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPageFound from './pages/NoPageFound';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
