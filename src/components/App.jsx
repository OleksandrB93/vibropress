import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from 'pages/Navbar/Navbar';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Production from 'pages/Production/Production';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/production" element={<Production />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
