import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Box,
  Link,
} from "@mui/material";
import logo from "../../assets/Logo.png";
import Frame2 from "../../assets/Group2.png";
import CustomButton from "../../components/customButton";

// Import a CSS file for custom styles

interface LoginForm {
  username: string;
  password: string;
  keepLoggedIn: boolean; // Add a new property for the checkbox
}

const EmailVerification: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
    keepLoggedIn: false, // Initialize the checkbox state
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "keepLoggedIn") {
      // Handle checkbox state change
      setFormData({
        ...formData,
        keepLoggedIn: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleLogin = () => {
    // Add your login logic here, e.g., sending the data to a server
    console.log("Login Form Data:", formData);
  };

  const typoStyle = {
    color: "#0F172A",
    fontFamily: "Outfit",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "140.625%",
  };
  const textWelcome = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "140.625%",
    fontSize: {
      xs: "34px",
      sm: "34px",
      md: "34px",
      lg: "48px",
    },
  };

  const textStyle = {
    color: "#64748B",
    textAlign: "center",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%",
    marginTop: "10px",
    fontSize: {
      xs: "14px",
      sm: "14px",
      md: "16px",
      lg: "16px",
    },
  };
  const textStyl = {
    color: "#000",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%" /* 19.688px */,
  };

  const typStyle = {
    color: "#64748B",
    textAlign: " center",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%" /* 19.688px */,
  };

  const typStyl = {
    color: "#4786FF",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "140.625%",
    textDecoration: "none",
  };

  const typoField = {
    color: "#000",
    fontFamily: "Outfit",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
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

  const textSst = {
    color: "#000",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "140.625%",
    textDecoration: "none",
  };

  const boxStyle = {
    width: "130px",
    height: "8px",
    borderRadius: "5px",
    background: "#E93223",
    marginTop: "10px", // Adjust as needed
    marginBottom: "10px", // Adjust as needed
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width state on window resize
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "auto" }}>
      {/* Left Section (Black Background) */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#FFE7E5",
          display: screenWidth <= 1000 ? "none" : "block",
        }}
      >
        <Box sx={{ marginLeft: "87px" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "16px", marginTop: "43px" }}
          />
        </Box>
        <Box
          sx={{
            marginLeft: "87px",
            width: "70%",
            maxWidth: "100%",
            marginTop: "143px",
          }}
        >
          <Typography sx={typoStyle}>
            Scale your organization faster with Colonees AI pool of talents.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "87px",
            marginTop: "40px",
            justifyContent: "space-around",
            maxWidth: "100%",
            width: "50%",
            gap: "20px",
          }}
        >
          <Box sx={boxStyle}></Box>
          <Box sx={boxStyle}></Box>
          <Box sx={boxStyle}></Box>
        </Box>

        <Box sx={{ marginTop: "99px" }}>
          <img src={Frame2} alt="Logo" style={{ width: "100%" }} />
        </Box>
      </div>

      {/* Right Section (Login Form) */}
      <div style={{ flex: 1, backgroundColor: "#F8FAFC", maxWidth: "100%" }}>
        <div style={{ display: screenWidth <= 1000 ? "block" : "none" }}>
          <Box sx={{ marginLeft: "26px" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", marginRight: "16px", marginTop: "43px" }}
            />
          </Box>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "67px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                maxWidth: "100%",
                width: "50%",
                gap: "20px",
              }}
            >
              <Box sx={boxStyle}></Box>
              <Box sx={boxStyle}></Box>
              <Box sx={boxStyle}></Box>
            </div>
          </div>
        </div>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            style={{
              padding: "20px",
              marginTop: "20px",
              backgroundColor: "#F8FAFC",
            }}
          >
            <Typography align="center" sx={textWelcome}>
              Verify your email
            </Typography>
            <Typography align="center" sx={textStyle}>
              Kindly enter the code sent to your email to proceed
            </Typography>

            <form>
              <Box sx={{ marginTop: "40px" }}>
                <Typography style={typoField}>Verification code</Typography>
                <TextField
                  label="Enter your 6 digit code"
                  fullWidth
                  margin="normal"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  InputLabelProps={{ style: labelStyle }}
                  InputProps={{ style: inputFieldStyle }}
                />
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Typography align="center" sx={textStyl}>
                  Didn’t receive code? Click{" "}
                  <Link href="#" style={textSst}>
                    Here
                  </Link>{" "}
                  to resend
                </Typography>
              </Box>

              <Box sx={{ marginTop: "40px" }}>
                <CustomButton text="Verify" onClick={handleLogin} />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography align="center" sx={typStyle}>
                  Already have an account?{" "}
                  <Link
                    component={RouterLink}
                    to="/login-business"
                    style={typStyl}
                  >
                    Log in
                  </Link>
                </Typography>
              </Box>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default EmailVerification;
