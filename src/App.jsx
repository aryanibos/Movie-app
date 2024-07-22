import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar/Navbar';
import CreateMovie from './pages/Movie/CreateMovie';
import PopularMovie from './pages/Movie/PopularMovie';
import NowPlayingMovie from './pages/Movie/NowPlayingMovie';
import TopRatedMovie from './pages/Movie/TopRated';
import Detail from './component/Detail/Detail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/movie/create" element={<CreateMovie />}></Route>
          <Route path="/movie/popular" element={<PopularMovie />}></Route>
          <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
          <Route path="/movie/top" element={<TopRatedMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
