import React from "react";

const Signup = () => {
    return (
        <div style={{
            backgroundColor: "purple",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <form style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
            }}>
                <h2 style={{ textAlign: "center", color: "purple" }}>Sign Up</h2>
                <div style={{ marginBottom: "10px" }}>
                    <label>Username:</label>
                    <input type="text" name="username" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Email:</label>
                    <input type="email" name="email" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Password:</label>
                    <input type="password" name="password" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
                </div>
                <button type="submit" style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "purple",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
