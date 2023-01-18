import { Route, Routes } from 'react-router-dom';
import { Header, Link, Container } from './App.modules';
import { NotFound } from '../../pages/NotFound';
import { Home } from '../../pages/Home';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
