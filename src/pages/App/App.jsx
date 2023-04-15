import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import LoginPage from '../loginPage'
import NavBar from '../../components/navBar';
import MoviesListPage from '../moviesListPage'
import MovieDetailPage from '../moviesDetailPage'
import ActorsListPage from '../actorListPage'
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState(null)

  function handleLogin(username) {
    setUser(username)
  }

  return (
    <main className="App">   
      

      { user ?
        <>
          <NavBar />
          <h1>Welcome: {user.username}</h1>
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies}/>} />
            <Route path="/actors" element={<ActorsListPage movies = {movies}/>} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies}/>} />
          </Routes>
        </>
        :
        <LoginPage userlogon={handleLogin}/>
      }
    </main>
  );
}

