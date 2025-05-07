import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Giả sử lưu trạng thái vào localStorage
    navigate('/account'); // Điều hướng sang trang Account
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default Login;
