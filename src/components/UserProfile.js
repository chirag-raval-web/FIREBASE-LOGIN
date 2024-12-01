import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./redux/authSlice";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
        backgroundColor: "#240046",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.username || "User"}!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: {user?.email}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogout}
        sx={{ mt: 2 }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserProfile;
