/**
 * LoginForm Component
 */
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError("Password must be at least 8 chars, include 1 uppercase, 1 number, 1 symbol");
      return;
    }
    setError("");
    navigate("/home");
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white">
      <h3 className="mb-3">Sign In</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Control 
          type="email" 
          placeholder="Email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="w-100">Login</Button>
    </Form>
  );
}
