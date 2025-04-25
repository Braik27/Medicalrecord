import React, { useState } from "react";
import axios from "axios";
import Arrow from "../assests/Arrow.png";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation basique
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3002/api/auth/login", 
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      // Sauvegarde du token et des infos utilisateur
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Redirection vers le tableau de bord
      navigate("/dashboard");

    } catch (error) {
      let errorMessage = "Échec de la connexion";
      
      if (error.response) {
        // Erreurs spécifiques du serveur
        errorMessage = error.response.data.message || errorMessage;
        
        // Cas particulier pour les comptes bloqués
        if (error.response.status === 403) {
          errorMessage = "Compte bloqué. Contactez l'administrateur.";
        }
      } else if (error.request) {
        // Pas de réponse du serveur
        errorMessage = "Pas de réponse du serveur. Vérifiez votre connexion.";
      }

      setError(errorMessage);
      console.error("Erreur de connexion:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgotpassword");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <>
      <Navbar />
      <div className="Hero container">
        <div className="Hero-text">
          <div>
            <h1>
              Tell me and I forget, teach me and I may remember, involve me and
              I learn
            </h1>
            <button className="btn">
              Explore-more <img src={Arrow} alt="Arrow icon" />
            </button>
          </div>
          <div className="wrapper">
            {error && <div className="error-message" style={{color: 'red', marginBottom: '15px'}}>{error}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  required
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="input-box">
                <input
                  required
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" disabled={loading} />
                  Remember Me
                </label>
                <button
                  type="button"
                  className="text-button"
                  onClick={handleForgotPassword}
                  disabled={loading}
                >
                  Forgot Password
                </button>
              </div>
              <button 
                className="btn" 
                type="submit"
                disabled={loading}
                style={{backgroundColor: loading ? '#ccc' : ''}}
              >
                {loading ? 'Connexion en cours...' : 'Login'}
              </button>
              <div className="register-link">
                <p>
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    className="text-button"
                    onClick={handleSignUp}
                    disabled={loading}
                  >
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
