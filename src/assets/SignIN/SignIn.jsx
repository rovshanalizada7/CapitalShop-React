import "../SignIN/signIn.css";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/feature/register/registerSlice";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SignIn = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const { value, loading } = useSelector((state) => state.register); 
  
  useEffect(() => {
    dispatch(getData());
  }, []);

  const checkApi = () => {
    const user = value.find(user => user.username === username && user.password === password);
    if (user) {
      navigate(`/welcome/${user.id}`);
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {  
      checkApi();
    }
  };

  return (
   <>
   <Header/>
    <div className="signin-form">
      <h2>Sign In</h2>

      <form action="#" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          placeholder="Password..."
          required
        />

        {error && <p className="input-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Sign In"}
        </button>

        <Link to="/signUp">No account? Register</Link> <br />
        <Link to="/">Home Page</Link>
      </form>
    </div>
    <Footer/>
   </>
  );
};

export default SignIn;
