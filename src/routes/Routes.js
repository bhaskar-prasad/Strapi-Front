import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserDashboard from '../components/UserDashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/:username" element={<UserDashboard />} />
        </Routes>
    );
};

export default AppRoutes;
