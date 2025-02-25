import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Button, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      console.log("Environment Variables:", process.env);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      // Handle successful signup
      console.log("Signup successful:", data);
      navigate("/login"); // Redirect after successful signup
    } catch (err) {
      console.log('Error*******', err);
      
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card style={{ width: "22rem", padding: "20px", borderRadius: "10px", margin: "2rem auto" }}>
      <h3 className="text-center">Sign Up</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          className="w-100"
          disabled={isLoading}
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </Button>

        <div className="text-center mt-3">
          <Button variant="danger" className="w-100">
            <FaGoogle /> Sign Up with Google
          </Button>
        </div>
        <div className="text-center mt-3">
          Already have an account?{' '}
          <a href="/login" style={{ cursor: 'pointer' }}>Login</a>
        </div>
      </Form>
    </Card>
  );
};

export default Signup;
