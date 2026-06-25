import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUser } from "react-icons/fa";
import "../css/login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("isLoggedIn", "true");
    navigate("/categories");
  };

  const isTyping = email !== "" || password !== "";

  return (
    <>
      <Navbar />

      <section className="login-page">
        <h2>Log In Now</h2>

        <div className="login-box">
          <div className={isTyping ? "login-user-icon normal" : "login-user-icon active"}>
            <FaUser />
          </div>

          <form onSubmit={handleLogin}>
            <label>Email-Id</label>
            <input
              type="email"
              placeholder="Enter Your Mail-id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Log In</button>

            <p>
              Don't Have An Account? <span>Create Now?</span>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;