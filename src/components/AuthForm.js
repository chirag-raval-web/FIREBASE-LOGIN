import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "./redux/authSlice";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/email-already-in-use":
        return "This email is already in use. Please log in.";
      case "auth/weak-password":
        return "Password should be at least 6 characters long.";
      case "auth/invalid-email":
        return "Invalid email address. Please check and try again.";
      default:
        return "An unexpected error occurred. Please try again later.";
    }
  };

  const handleRegister = async () => {
    if (username && email && password) {
      try {
        await dispatch(registerUser({ username, email, password })).unwrap();
        navigate("/profile");
      } catch (error) {
        console.error("Error during registration:", error.message);
      }
    }
  };

  const handleLogin = async () => {
    if (email && password) {
      try {
        await dispatch(loginUser({ email, password })).unwrap();
        navigate("/profile");
      } catch (error) {
        console.error("Error during login:", error.message);
      }
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const textFieldStyles = {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "4px",
    mb: 2,
    "& .MuiFilledInput-root": {
      padding: "12px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    "& .MuiFilledInput-input": {
      padding: "10px",
      color: "white",
    },
    "& .MuiFilledInput-notchedOutline": { border: "none" },
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  };

  const style = {
    mainContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
    },
    formContainer: {
      position: "relative",
      backgroundColor: "#240046",
      width: "100%",
      maxWidth: "400px",
      margin: "auto",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "7px 7px 10px 3px #24004628",
      padding: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "500px",
      transition: "0.5s ease-in-out",
    },
  };

  return (
    <Box sx={style.mainContainer}>
      <Paper elevation={6} sx={style.formContainer}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {!isRegistering ? (
              <>
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight="bold"
                  sx={{ mb: 2 }}
                >
                  Log in
                </Typography>
                <TextField
                  variant="filled"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  sx={textFieldStyles}
                />
                <TextField
                  variant="filled"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  sx={textFieldStyles}
                />
                {error && (
                  <Typography color="red" variant="body2" sx={{ mb: 2 }}>
                    {getErrorMessage(error)}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleLogin}
                  sx={{
                    backgroundColor: "#573b8a",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#6d44b8" },
                    mb: 2,
                    padding: "10px",
                    textTransform: "none",
                  }}
                >
                  Log in
                </Button>
                <Button
                  onClick={toggleForm}
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Don't have an account? Sign up
                </Button>
              </>
            ) : (
              <>
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight="bold"
                  sx={{ mb: 2 }}
                >
                  Register
                </Typography>
                <TextField
                  variant="filled"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                  sx={textFieldStyles}
                />
                <TextField
                  variant="filled"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  sx={textFieldStyles}
                />
                <TextField
                  variant="filled"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  sx={textFieldStyles}
                />
                {error && (
                  <Typography color="red" variant="body2" sx={{ mb: 2 }}>
                    {getErrorMessage(error)}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleRegister}
                  sx={{
                    backgroundColor: "#573b8a",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#6d44b8" },
                    mb: 2,
                    padding: "10px",
                    textTransform: "none",
                  }}
                >
                  Register
                </Button>
                <Button
                  onClick={toggleForm}
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Already have an account? Log in
                </Button>
              </>
            )}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default AuthForm;
