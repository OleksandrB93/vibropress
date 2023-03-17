import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Production from 'pages/Production/Production';
import Production2 from 'pages/Production/Production2/Production2';
import Production3 from 'pages/Production/Production3/Production3';
import Production4 from 'pages/Production/Production4/Production4';
import Production5 from 'pages/Production/Production5/Production5';
import Service from 'pages/Service/Service';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/production" element={<Production />} />
        <Route path="/vibropress" element={<Production />} />

        <Route path="/vibropress/model1" element={<Production />} />
        <Route path="/vibropress/model2" element={<Production2 />} />
        <Route path="/vibropress/model3" element={<Production3 />} />
        <Route path="/vibropress/model4" element={<Production4 />} />
        <Route path="/vibropress/model5" element={<Production5 />} />

        <Route path="/betonomix" element={<Production />} />
        <Route path="/pressform" element={<Production />} />
        <Route path="/service" element={<Service />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};