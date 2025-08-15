import { useState } from "react";
import LoginPage from "@/components/LoginPage";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEnrollment, setUserEnrollment] = useState("");
  const [userRole, setUserRole] = useState("");

  const handleLogin = (enrollmentNo: string, role: string) => {
    setUserEnrollment(enrollmentNo);
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEnrollment("");
    setUserRole("");
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Dashboard 
      enrollmentNo={userEnrollment} 
      role={userRole} 
      onLogout={handleLogout} 
    />
  );
};

export default Index;
