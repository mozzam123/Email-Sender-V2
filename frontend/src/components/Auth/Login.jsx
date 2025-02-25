import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Button, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
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

            
            console.log('*******meta', import.meta.env.VITE_BACKEND_BASE_URL);
            
            const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Login failed");
            }

            // Handle successful login
            console.log("Login successful:", data);
            navigate("/"); // Redirect to home after login
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card style={{ width: "22rem", padding: "20px", borderRadius: "10px", margin: "2rem auto" }}>
            <h3 className="text-center">Login</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form onSubmit={handleSubmit}>
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
                    {isLoading ? "Logging In..." : "Login"}
                </Button>

                <div className="text-center mt-3">
                    <Button variant="danger" className="w-100">
                        <FaGoogle /> Login with Google
                    </Button>
                </div>
                <div className="text-center mt-3">
                    Don't have an account?{' '}
                    <a href="/signup" style={{ cursor: 'pointer' }}>Sign Up</a>
                </div>
            </Form>
        </Card>
    );
};

export default Login; 