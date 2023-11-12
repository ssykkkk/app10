import React from 'react';
import AuthProvider from '../AuthProvider/AuthProvider';
import Header from '../Header/Header';
import Content from '../Content/Content';

const App = () => {
  return (
    <AuthProvider>
        <Header />
        <Content />
    </AuthProvider>
  );
};

export default App;

