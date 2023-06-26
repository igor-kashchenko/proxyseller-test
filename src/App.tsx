import React from 'react';
import { HomePage } from './modules/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './modules/NotFoundPage';
import { AppContainer } from './components/AppContainer';
import { UserPostsPage } from './modules/UserPostsPage';

const App: React.FC = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/:userId/posts" element={<UserPostsPage />} />

        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
