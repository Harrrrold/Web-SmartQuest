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
import ModuleCreatorProfileEdit from './modulecreator-screens/modulecreator-profile-edit';
import ModuleCreatorChangePassword from './modulecreator-screens/modulecreator-change-password';
import AdminDashboard from './admin-screens/admin-dashboard';
import AdminModuleList from './admin-screens/admin-modulelist';
import AdminCreateModule from './admin-screens/admin-create-module';
import AdminEditLevel from './admin-screens/admin-edit-level';
import AdminModuleContent from './admin-screens/admin-module-content';
import AdminModuleLevelContent from './admin-screens/admin-module-level-content';
import AdminAllModuleContent from './admin-screens/admin-all-module-content';
import AdminAllModuleLevelContent from './admin-screens/admin-all-module-level-content';
import AdminVerificationList from './admin-screens/admin-verificationlist';
import AdminVerificationModuleCreator from './admin-screens/admin-verification-modulecreator';
import AdminVerificationModuleContent from './admin-screens/admin-verification-module-content';
import AdminVerificationModuleLevelContent from './admin-screens/admin-verification-module-level-content';
import AdminUserList from './admin-screens/admin-userlist';
import AdminUserView from './admin-screens/admin-user-view';
import AdminAnnouncement from './admin-screens/admin-announcement';
import AdminNotification from './admin-screens/admin-notification';
import AdminLogs from './admin-screens/admin-logs';
import ModuleCreatorModuleContent from './modulecreator-screens/modulecreator-module-content';
import ModuleCreatorModuleLevelContent from './modulecreator-screens/modulecreator-module-level-content';
import ModuleCreatorNotification from './modulecreator-screens/modulecreator-notification';



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
        <Route path="/modulecreator-profile-edit" element={<ModuleCreatorProfileEdit />} />
        <Route path="/modulecreator-change-password" element={<ModuleCreatorChangePassword />} />
        <Route path="/modulecreator-module-content" element={<ModuleCreatorModuleContent />} />
        <Route path="/modulecreator-module-level-content" element={<ModuleCreatorModuleLevelContent />} />
        <Route path="/modulecreator-notification" element={<ModuleCreatorNotification />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-modulelist" element={<AdminModuleList />} />
        <Route path="/admin-create-module" element={<AdminCreateModule />} />
        <Route path="/admin-edit-level" element={<AdminEditLevel />} />
        <Route path="/admin-module-content" element={<AdminModuleContent />} />
        <Route path="/admin-module-level-content" element={<AdminModuleLevelContent />} />
        <Route path="/admin-all-module-content" element={<AdminAllModuleContent />} />
        <Route path="/admin-all-module-level-content" element={<AdminAllModuleLevelContent />} />
        <Route path="/admin-verificationlist" element={<AdminVerificationList />} />
        <Route path="/admin-verification-modulecreator" element={<AdminVerificationModuleCreator />} />
        <Route path="/admin-verification-module-content" element={<AdminVerificationModuleContent />} />
        <Route path="/admin-verification-module-level-content" element={<AdminVerificationModuleLevelContent />} />
        <Route path="/admin-userlist" element={<AdminUserList />} />
        <Route path="/admin-user-view" element={<AdminUserView />} />
        <Route path="/admin-announcement" element={<AdminAnnouncement />} />
        <Route path="/admin-notification" element={<AdminNotification />} />
        <Route path="/admin-logs" element={<AdminLogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
