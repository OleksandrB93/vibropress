import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Production from 'pages/Production/Production';
import Production2 from 'pages/Production/Production2/Production2';
import Service from 'pages/Service/Service';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/production" element={<Production />} />
        <Route path="/vibropress" element={<Production />} />
        
        <Route path="/vibropress/model1" element={<Production2 />} />
        <Route path="/vibropress/model2" element={<Production2 />} />
        <Route path="/vibropress/model3" element={<Production2 />} />
        <Route path="/vibropress/model4" element={<Production2 />} />

        <Route path="/betonomix" element={<Production />} />
        <Route path="/pressform" element={<Production />} />
        <Route path="/service" element={<Service />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
