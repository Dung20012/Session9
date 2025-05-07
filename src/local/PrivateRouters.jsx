import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouters = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated) {
    return <>{children}</>; // Nếu đã đăng nhập, cho phép truy cập vào trang Account
  } else {
    return <Navigate to="/login" />; // Nếu chưa đăng nhập, chuyển hướng về trang Login
  }
};

export default PrivateRouters;
