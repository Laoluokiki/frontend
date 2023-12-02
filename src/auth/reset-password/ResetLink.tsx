import React from "react";
import { Container, Typography, Paper, Box, Link } from "@mui/material";
import Navbar from "../../components/navbar";
import CustomButton from "../../components/customButton";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

interface ResetLink {
  email: string; // Update the type to 'email'
}

const ResetLink: React.FC = () => {
  const navigate = useNavigate(); // Access the navigate function using useNavigate hook
  const handleResetPassword = () => {
    // Implement your reset password logic here.
    // You should validate the email, make an API request, etc.
    navigate("/login-talent");
  };

  const typoStyle = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Outfit",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "140.625%",
  };

  const textStyle = {
    color: "#64748B",
    textAlign: "center",
    fontFamily: "Outfit",
    fontSize: {
      xs: "14px",
      sm: "14px",
      md: "14px",
      lg: "16px",
    },
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%",
  };

  const centerTextContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // Ensure the container takes the full height of the Paper
  };

  const textEmail = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Outfit",
    fontSize: {
      xs: "14px",
      sm: "14px",
      md: "14px",
      lg: "16px",
    },
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const textHelp = {
    color: "#64748B",
    textAlign: "center",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%",
  };

  const textSupport = {
    color: "#4786FF",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "140.625%",
  };

  const textLink = {
    color: "#000",
    fontFamily: "Outfit",
    fontSize: {
      xs: "14px",
      sm: "14px",
      md: "14px",
      lg: "16px",
    },
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    textDecoration: "none",
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="sm" sx={{ marginTop: "117px" }}>
        <Paper elevation={0} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h4" sx={typoStyle}>
            Reset link sent!
          </Typography>
          <div style={centerTextContainer}>
            <Box
              sx={{
                maxWidth: "100%",
                width: {
                  xs: "83%",
                  sm: "83%",
                  md: "73%",
                  lg: "63%",
                },
                marginTop: "10px",
              }}
            >
              <Typography variant="h4" sx={textStyle}>
                Kindly check your email. We’ve sent you a link to reset your
                password
              </Typography>
            </Box>
          </div>

          <div style={centerTextContainer}>
            <Box
              sx={{
                maxWidth: "100%",
                marginTop: "60px",
              }}
            >
              <Typography variant="h4" sx={textEmail}>
                If you don’t get an email, click{" "}
                <Link component={RouterLink} to="/reset-links" sx={textLink}>
                  Here
                </Link>{" "}
                to resend another. If you still don’t get an email, please check
                your spam folder.
              </Typography>
            </Box>
          </div>
          <Box sx={{ marginTop: "60px" }}>
            <Box sx={{ marginTop: "60px" }}>
              <CustomButton
                text="Back to login"
                onClick={handleResetPassword}
              />
            </Box>
            <Typography
              variant="h4"
              sx={textHelp}
              style={{ marginTop: "10px" }}
            >
              Need help? <span style={textSupport}>Contact Support</span>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default ResetLink;
