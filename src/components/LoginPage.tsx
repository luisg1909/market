import React from "react";
import { Button } from "react-bootstrap";

interface LoginPageProps {
  onLogin: (role: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="text-center my-5">
      <h2>Welcome to the Market App</h2>
      <p>Select your role to continue:</p>
      <Button
        variant="primary"
        className="mx-2"
        onClick={() => onLogin("regular")}
      >
        Enter as Regular User
      </Button>
      <Button
        variant="danger"
        className="mx-2"
        onClick={() => onLogin("admin")}
      >
        Enter as Admin
      </Button>
    </div>
  );
};

export default LoginPage;
