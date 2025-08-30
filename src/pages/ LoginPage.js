import React, { useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import "./LoginPage.css";
import Logo from '../../src/assets/images/img1.png'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Password validation: 8+ chars, 1 uppercase, 1 number, 1 symbol
  const validatePassword = (pwd) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError("Password must be 8+ chars, 1 uppercase, 1 number, 1 symbol");
      return;
    }

    //Clear error
    setError("");

  // Redirect to home page
    navigate("/home");
  };

  return (
    <div className="login-page">
      <Row className="w-100">
        {/* Left column */}
        <Col lg={6} className="d-flex justify-content-center align-items-center">
          <div className="login-form-container">
            <h2>Sign In</h2>
            <p><b>
              New user? </b><a href="#">Create an account</a>
            </p>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form className="form-class" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Username or email"
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

              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Check className="checkbox-class" type="checkbox" id="remember" label="Keep me signed in" />
              </Form.Group>

              <Button type="submit">Sign In</Button>
            </Form>

            <div className="d-flex align-items-center mt-3">
              <hr className="flex-grow-1" />
              <span className="mx-2">Or Sign In With</span>
              <hr className="flex-grow-1" />
            </div>

      <Row className="justify-content-center">
                  {/* Social Icons */}
                  <Col xs={12} className="text-center mb-3">
                    <div className="social-icons-container">
                       <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
                  <FaGoogle />
                </a>
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
                  <FaFacebookF />
                </a>
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
                                   <FaLinkedinIn />
                                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
                  <FaTwitter />
                </a>
              
                    </div>
                  </Col>

                </Row>
          </div>
        </Col>

        {/* Right column */}
        <Col lg={6} className="illustration-container">
          <img src={Logo} alt="illustration" className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
}
