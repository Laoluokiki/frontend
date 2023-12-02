import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Box,
  Divider,
  Link,
  IconButton, // Import IconButton
  InputAdornment, // Import InputAdornment
} from "@mui/material";
import logo from "../../assets/Logo.png";
import Frame from "../../assets/Group1.png";
import LinkButton from "../../components/whiteButton";
import CustomButton from "../../components/customButton";
import Visibility from "../../components/visibility";
import PassEye from "../../components/passEye";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../../components/googleButton";

// Import a CSS file for custom styles

interface LoginForm {
  username: string;
  password: string;
  keepLoggedIn: boolean; // Add a new property for the checkbox
}

const SignupTalent: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
    keepLoggedIn: false, // Initialize the checkbox state
  });

  const navigate = useNavigate(); // Access the navigate function using useNavigate hook

  const handleSignUp = () => {
    // Perform any necessary actions before navigating
    // For example, perform form validation or data submission

    // Navigate to the desired page upon signing up
    navigate("/email-verification"); // Replace '/desired-page' with the route you want to navigate to
  };

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
    fontSize: "16px",
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
    justifyContent: "space-between",
    marginTop: "40px",
    maxWidth: "100%",
  };

  const dividerStyle = {
    flex: 1,
    margin: "8px",
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

  const typoPas = {
    color: "#000",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%",
  };

  const textSign = {
    color: "#000",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%",
  };

  const boxStyle = {
    width: "130px",
    height: "8px",
    borderRadius: "5px",
    background: "#E93223",
    marginTop: "10px", // Adjust as needed
    marginBottom: "10px", // Adjust as needed
  };
  const boxStyl = {
    width: "130px",
    height: "8px",
    borderRadius: "5px",
    background: "#E93223",
    marginTop: "10px", // Adjust as needed
    marginBottom: "10px", // Adjust as needed
  };
  const boxSty = {
    width: "130px",
    height: "8px",
    borderRadius: "5px",
    background: "rgba(100, 116, 139, 0.20)",
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
            Work with other skilled pros across the world on projects.
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
          <Box sx={boxStyl}></Box>
          <Box sx={boxSty}></Box>
        </Box>

        <Box sx={{ marginTop: "410px" }}>
          <img src={Frame} alt="Logo" style={{ width: "100%" }} />
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
              <Box sx={boxStyl}></Box>
              <Box sx={boxSty}></Box>
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
              Sign up in few steps
            </Typography>
            <Typography align="center" sx={textStyle}>
              Kindly enter the following information to sign up
            </Typography>

            <div style={{ ...buttonContainerStyle }}>
              <LinkButton
                text="Sign up with LinkedIn"
                icon="linkedin"
                width="48%"
                onClick={() => console.log("LinkedIn button clicked")}
              />
              <GoogleButton
                text="Sign in with Google"
                icon="google" // Assuming 'google' is the correct identifier for the Google icon
                width="48%"
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "100%",
                }}
              >
                <Box sx={{ marginTop: "20px", width: "48%" }}>
                  <Typography style={typoField}>First Name</Typography>
                  <TextField
                    label="Enter your first name "
                    fullWidth
                    margin="normal"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{ style: inputFieldStyle }}
                  />
                </Box>
                <Box sx={{ marginTop: "20px", width: "48%" }}>
                  <Typography style={typoField}>Last Name</Typography>
                  <TextField
                    label="Enter your last name "
                    fullWidth
                    margin="normal"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{ style: inputFieldStyle }}
                  />
                </Box>
              </div>
              <Box sx={{ marginTop: "40px" }}>
                <Typography style={typoField}>Email Address</Typography>
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
                <Typography style={typoField}>Phone Number</Typography>
                <Box
                  sx={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ width: "17%" }}>
                    <TextField
                      label=""
                      fullWidth
                      margin="normal"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      InputLabelProps={{ style: labelStyle }}
                      InputProps={{ style: inputFieldStyle }}
                    />
                  </Box>
                  <Box sx={{ width: "81%" }}>
                    <TextField
                      label="Enter your phone number "
                      fullWidth
                      margin="normal"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      InputLabelProps={{ style: labelStyle }}
                      InputProps={{ style: inputFieldStyle }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ marginTop: "40px" }}>
                <Typography style={typoField}>Role</Typography>
                <TextField
                  label="Enter your role "
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
                <Typography style={typoField}>Portfolio Link</Typography>
                <TextField
                  label="Enter your portfolio link"
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

                <Box sx={{ marginTop: "20px" }}>
                  <Typography align="center" style={typoPas}>
                    Password must include
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: "20px",
                    }}
                  >
                    <Typography
                      align="center"
                      style={textSign}
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "15px",
                          lg: "16px",
                        },
                      }}
                    >
                      8+ <br></br>{" "}
                      <Typography
                        style={textSign}
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            md: "14px",
                            lg: "14px",
                          },
                        }}
                      >
                        Characters
                      </Typography>
                    </Typography>
                    <Typography
                      align="center"
                      style={textSign}
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "15px",
                          lg: "16px",
                        },
                      }}
                    >
                      AA <br></br>{" "}
                      <Typography
                        style={textSign}
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            md: "14px",
                            lg: "14px",
                          },
                        }}
                      >
                        Uppercase
                      </Typography>
                    </Typography>
                    <Typography
                      align="center"
                      style={textSign}
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "15px",
                          lg: "16px",
                        },
                      }}
                    >
                      aa <br></br>{" "}
                      <Typography
                        style={textSign}
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            md: "14px",
                            lg: "14px",
                          },
                        }}
                      >
                        Lowercase
                      </Typography>
                    </Typography>
                    <Typography
                      align="center"
                      style={textSign}
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "15px",
                          lg: "16px",
                        },
                      }}
                    >
                      123 <br></br>
                      <Typography
                        style={textSign}
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            md: "14px",
                            lg: "14px",
                          },
                        }}
                      >
                        Numbers
                      </Typography>
                    </Typography>
                    <Typography
                      align="center"
                      style={textSign}
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "15px",
                          lg: "16px",
                        },
                      }}
                    >
                      $#* <br></br>
                      <Typography
                        style={textSign}
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            md: "14px",
                            lg: "14px",
                          },
                        }}
                      >
                        Symbol
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ marginTop: "40px" }}>
                <CustomButton text="Sign up" onClick={handleSignUp} />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography align="center" sx={typStyle}>
                  Already have an account?{" "}
                  <Link
                    component={RouterLink}
                    to="/login-talent"
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

export default SignupTalent;
