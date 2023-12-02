import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Box,
  Divider,
  Checkbox,
  Link,
  IconButton, // Import IconButton
  InputAdornment, // Import InputAdornment
} from "@mui/material";
import logo from "../../assets/Logo.png";
import Frame6 from "../../assets/Frame6.png";
import LinkButton from "../../components/WhiteButton";
import CustomButton from "../../components/CustomButton";
import Visibility from "../../components/Visibility";
import PassEye from "../../components/PassEye";

// Import a CSS file for custom styles

interface LoginForm {
  username: string;
  password: string;
  keepLoggedIn: boolean; // Add a new property for the checkbox
}

const LoginPage: React.FC = () => {
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

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
  };
  const textStyl = {
    color: "#64748B",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px",
    maxWidth: "100%",
  };

  const dividerStyle = {
    flex: 1,
    margin: "8px",
  };

  const checkboxStyle = {
    color: "red", // Set the color to red
    "&.Mui-checked": {
      color: "red", // Set the color to red when checked
    },
    alignItems: "center",
  };

  const typStyle = {
    color: "#64748B",
    textAlign: " center",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%" /* 19.688px */,
    fontSize: {
      xs: "14px",
      sm: "14px",
      md: "16px",
      lg: "16px",
    },
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

  const typoFiel = {
    color: "#000",
    fontFamily: "Outfit",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "140.625%",
    marginBottom: "10px",
  };

  const typoPass = {
    color: "#334155",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "140.625%",
    textDecoration: "none",
    whiteSpace: "nowrap",
    fontSize: {
      xs: "13px",
      sm: "13px",
      md: "14px",
      lg: "14px",
    },
  };

  const typoLog = {
    color: "#1E293B",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%",
    whiteSpace: "nowrap",
    fontSize: {
      xs: "13px",
      sm: "13px",
      md: "14px",
      lg: "14px",
    },
    marginTop: "12px",
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
            width: "80%",
            maxWidth: "100%",
            marginTop: "143px",
          }}
        >
          <Typography sx={typoStyle}>
            Build and manage winning teams for your business with Coloness AI.
          </Typography>
        </Box>

        <Box>
          <img src={Frame6} alt="Logo" style={{ width: "100%" }} />
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
              Welcome back Apple
            </Typography>
            <Typography align="center" sx={textStyle}>
              Kindly enter your email and password to login
            </Typography>

            <div style={{ ...buttonContainerStyle }}>
              <LinkButton
                text="Sign in with LinkedIn"
                icon="linkedin"
                width="100%"
                onClick={() => console.log("LinkedIn button clicked")}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Divider sx={dividerStyle} />
              <Typography sx={textStyl}>or log in with</Typography>
              <Divider sx={dividerStyle} />
            </div>

            <form>
              <Box sx={{ marginTop: "20px" }}>
                <Typography style={typoField}>Business Email</Typography>
                <TextField
                  label="Enter your email"
                  fullWidth
                  margin="normal"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  InputLabelProps={{ style: labelStyle }}
                  InputProps={{ style: inputFieldStyle }}
                />
              </Box>
              <Box sx={{ marginTop: "40px" }}>
                <Typography style={typoFiel}>Password</Typography>
                <TextField
                  label="Password"
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  value={formData.password}
                  onChange={handleInputChange}
                  InputLabelProps={{ style: labelStyle }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility}>
                          {showPassword ? <Visibility /> : <PassEye />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: inputFieldStyle,
                  }}
                />
              </Box>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <Checkbox
                      name="keepLoggedIn"
                      checked={formData.keepLoggedIn}
                      onChange={handleInputChange}
                      sx={checkboxStyle}
                    />
                    <Typography sx={typoLog}>Keep me logged in</Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ justifyContent: "flex-end", marginTop: "10px" }}
                    >
                      <Link href="#" sx={typoPass}>
                        {" "}
                        Forgot Password?
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </div>

              <Box sx={{ marginTop: "40px" }}>
                <CustomButton text="Login" onClick={handleLogin} />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography align="center" sx={typStyle}>
                  Don’t have an account yet?{" "}
                  <Link component={RouterLink} to="/" style={typStyl}>
                    sign up
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

export default LoginPage;
