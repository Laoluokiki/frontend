import React, { useState } from "react";
import { Container, Typography, Paper, TextField, Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";

interface ResetPasswordForm {
  email: string; // Update the type to 'email'
}

const ResetPasswordPage: React.FC = () => {
  const [formData, setFormData] = useState<ResetPasswordForm>({
    email: "", // Update the property name to 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate(); // Access the navigate function using useNavigate hook
  const handleResetPassword = () => {
    // Implement your reset password logic here.
    // You should validate the email, make an API request, etc.
    navigate("/reset-link");
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
    fontFamily: "Outfit",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "140.625%",
  };

  const textHelp = {
    color: "#64748B",
    textAlign: "center",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%",
    marginTop: "10px",
  };

  const textSupport = {
    color: "#4786FF",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "140.625%",
  };

  const labelStyle = {
    color: "#1E293B",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%" /* 19.688px */,
  };

  const inputFieldStyle = {
    backgroundColor: "white",
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: "117px" }}>
        <Paper elevation={0} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h4" sx={typoStyle}>
            Reset Password
          </Typography>
          <div style={centerTextContainer}>
            <Box
              sx={{
                maxWidth: "100%",
                width: "60%",
              }}
            >
              <Typography variant="h4" sx={textStyle}>
                Enter your email address, and we’ll send you a reset link
              </Typography>
            </Box>
          </div>
          <Box sx={{ marginTop: "60px" }}>
            <Typography
              variant="h4"
              sx={{
                maxWidth: "100%",
                width: "100%",
              }}
              style={textEmail}
            >
              Email Address
            </Typography>
            <form>
              <TextField
                label="Enter your email" // Update the label
                fullWidth
                margin="normal"
                name="email" // Update the name to 'email'
                type="email" // Change the type to 'email'
                value={formData.email} // Update the property name to 'email'
                onChange={handleInputChange}
                InputLabelProps={{ style: labelStyle }}
                InputProps={{ style: inputFieldStyle }}
              />
              <Box
                sx={{
                  marginTop: {
                    xs: "40px",
                    sm: "40px",
                    md: "40px",
                    lg: "60px",
                  },
                }}
              >
                <CustomButton
                  text="Send Reset link"
                  onClick={handleResetPassword}
                />
              </Box>
            </form>
            <Typography variant="h4" sx={textHelp}>
              Need help? <span style={textSupport}>Contact Support</span>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default ResetPasswordPage;
