import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './screens/welcome';
import Login from './screens/login';
import Register from './screens/register';
import RegisterCredentials from './screens/registercredentials';
import ForgetPassword from './screens/forgetpassword';
import ChangePassword from './screens/changepassword';
import ModuleCreatorDashboard from './modulecreator-screens/modulecreator-dashboard';
import ModuleCreatorModuleList from './modulecreator-screens/modulecreator-modulelist';
import ModuleCreatorMenu from './modulecreator-screens/modulecreator-menu';
import ModuleCreatorCreateModule from './modulecreator-screens/modulecreator-create-module';
import ModuleCreatorEditLevel from './modulecreator-screens/modulecreator-edit-level';
import ModuleCreatorProfile from './modulecreator-screens/modulecreator-profile';
import ModuleCreatorPaymentMethod from './modulecreator-screens/modulecreator-payment-method';
import ModuleCreatorSettings from './modulecreator-screens/modulecreator-settings';
import ModuleCreatorAbout from './modulecreator-screens/modulecreator-about';
import ModuleCreatorTermsAndAgreement from './modulecreator-screens/modulecreator-terms-and-agreement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-credentials" element={<RegisterCredentials />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/modulecreator-dashboard" element={<ModuleCreatorDashboard />} />
        <Route path="/modulecreator-modulelist" element={<ModuleCreatorModuleList />} />
        <Route path="/modulecreator-menu" element={<ModuleCreatorMenu />} />
        <Route path="/modulecreator-create-module" element={<ModuleCreatorCreateModule />} />
        <Route path="/modulecreator-edit-level" element={<ModuleCreatorEditLevel />} />
        <Route path="/modulecreator-profile" element={<ModuleCreatorProfile />} />
        <Route path="/modulecreator-payment-method" element={<ModuleCreatorPaymentMethod />} />
        <Route path="/modulecreator-settings" element={<ModuleCreatorSettings />} />
        <Route path="/modulecreator-about" element={<ModuleCreatorAbout />} />
        <Route path="/modulecreator-terms-and-agreement" element={<ModuleCreatorTermsAndAgreement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
