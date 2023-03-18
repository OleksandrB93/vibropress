import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Production from 'pages/Production/Vibropress/Production';
import Production2 from 'pages/Production/Vibropress/Production2/Production2';
import Production3 from 'pages/Production/Vibropress/Production3/Production3';
import Production4 from 'pages/Production/Vibropress/Production4/Production4';
import Production5 from 'pages/Production/Vibropress/Production5/Production5';
import Service from 'pages/Service/Service';
import Beton1 from 'pages/Production/Beton/Beton1/Beton1';
import Beton2 from 'pages/Production/Beton/Beton2/Beton2';
import Beton3 from 'pages/Production/Beton/Beton3/Beton3';
import Beton4 from 'pages/Production/Beton/Beton4/Beton4';
import Beton5 from 'pages/Production/PressForm/PressForm1/PressForm1';
import PressForm1 from 'pages/Production/PressForm/PressForm1/PressForm1';
import PressForm2 from 'pages/Production/PressForm/PressForm2/PressForm2';
import PressForm3 from 'pages/Production/PressForm/PressForm3/PressForm3';

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

        <Route path="/beton/model1" element={<Beton1 />} />
        <Route path="/beton/model2" element={<Beton2 />} />
        <Route path="/beton/model3" element={<Beton3 />} />
        <Route path="/beton/model4" element={<Beton4 />} />
        <Route path="/beton/model5" element={<Beton5 />} />

        <Route path="/press-form/model1" element={<PressForm1 />} />
        <Route path="/press-form/model2" element={<PressForm2 />} />
        <Route path="/press-form/model3" element={<PressForm3 />} />
        <Route path="/press-form/model4" element={<PressForm1 />} />


        <Route path="/betonomix" element={<Production />} />
        <Route path="/pressform" element={<Production />} />
        <Route path="/service" element={<Service />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
