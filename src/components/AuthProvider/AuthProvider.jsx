import { React,  useState } from 'react';
import {AuthContext} from '../../share/context';

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(null);

  const toggleAuthentication = () => {
    if (isAuthenticated) {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', 'login');
    }
    setAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
