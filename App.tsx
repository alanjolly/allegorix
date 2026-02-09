import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Course } from './pages/Course';
import { Labs } from './pages/Labs';
import { Schedule } from './pages/Schedule';
import { Tools } from './pages/Tools';
import { Certifications } from './pages/Certifications';
import { Register } from './pages/Register';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;