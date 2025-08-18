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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
