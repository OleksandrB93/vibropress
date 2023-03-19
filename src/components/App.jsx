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
import Beton22 from 'pages/Production/Beton/Beton22/Beton22';
import Beton2 from 'pages/Production/Beton/Beton2/Beton2';
import Beton3 from 'pages/Production/Beton/Beton3/Beton3';
import Beton4 from 'pages/Production/Beton/Beton4/Beton4';
import Beton6 from 'pages/Production/Beton/Beton6/Beton6';
import PressForm1 from 'pages/Production/PressForm/PressForm1/PressForm1';
import PressForm2 from 'pages/Production/PressForm/PressForm2/PressForm2';
import PressForm3 from 'pages/Production/PressForm/PressForm3/PressForm3';
import PressForm4 from 'pages/Production/PressForm/PressForm4/PressForm4';
import Transport1 from 'pages/Production/Transport/Transport1/Transport1';
import Transport2 from 'pages/Production/Transport/Transport2/Transport2';
import Transport3 from 'pages/Production/Transport/Transport3/Transport3';
import HelpEquip1 from 'pages/Production/HelpEquip/HelpEquip1/HelpEquip1';
import HelpEquip2 from 'pages/Production/HelpEquip/HelpEquip2/HelpEquip2';
import HelpEquip3 from 'pages/Production/HelpEquip/HelpEquip3/HelpEquip3';
import HelpEquip4 from 'pages/Production/HelpEquip/HelpEquip4/HelpEquip4';
import HelpEquip5 from 'pages/Production/HelpEquip/HelpEquip5/HelpEquip5';
import HelpEquip6 from 'pages/Production/HelpEquip/HelpEquip6/HelpEquip6';
import HelpEquip7 from 'pages/Production/HelpEquip/HelpEquip7/HelpEquip7';
import HelpEquip8 from 'pages/Production/HelpEquip/HelpEquip8/HelpEquip8';
import HelpEquip9 from 'pages/Production/HelpEquip/HelpEquip9/HelpEquip9';

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
        <Route path="/beton/model2" element={<Beton22 />} />
        <Route path="/beton/model3" element={<Beton2 />} />
        <Route path="/beton/model4" element={<Beton3 />} />
        <Route path="/beton/model5" element={<Beton4 />} />
        <Route path="/beton/model6" element={<Beton6 />} />

        <Route path="/press-form/model1" element={<PressForm1 />} />
        <Route path="/press-form/model2" element={<PressForm2 />} />
        <Route path="/press-form/model3" element={<PressForm3 />} />
        <Route path="/press-form/model4" element={<PressForm4 />} />

        <Route path="/transport/model1" element={<Transport1 />} />
        <Route path="/transport/model2" element={<Transport2 />} />
        <Route path="/transport/model3" element={<Transport3 />} />

        <Route path="/help-equip/model1" element={<HelpEquip1 />} />
        <Route path="/help-equip/model2" element={<HelpEquip2 />} />
        <Route path="/help-equip/model3" element={<HelpEquip3 />} />
        <Route path="/help-equip/model4" element={<HelpEquip4 />} />
        <Route path="/help-equip/model5" element={<HelpEquip5 />} />
        <Route path="/help-equip/model6" element={<HelpEquip6 />} />
        <Route path="/help-equip/model7" element={<HelpEquip7 />} />
        <Route path="/help-equip/model8" element={<HelpEquip8 />} />
        <Route path="/help-equip/model9" element={<HelpEquip9 />} />

        <Route path="/betonomix" element={<Production />} />
        <Route path="/pressform" element={<Production />} />
        <Route path="/service" element={<Service />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
