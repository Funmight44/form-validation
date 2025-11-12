import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to User Info App</h1>
        <p>Manage your profile securely with Firebase authentication.</p>
      </header>

      <div className="home-actions">
        <button className="btn signup-btn" onClick={() => navigate("/signup")}>
          Create Account
        </button>
        <button className="btn login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
