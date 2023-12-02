import React, { useState, useEffect } from "react";
import { Container, Typography, Paper, Box, Grid } from "@mui/material";
import logo from "../../assets/Logo.png";
import Frame6 from "../../assets/Frame6.png";
import Lady from "../../assets/ladystand.png";
import Lady2 from "../../assets/ladystands.png";
import Man from "../../assets/businessman.png";
import Mans from "../../assets/businessmans.png";
import { connect } from "react-redux";
import { RootState } from "../../redux/checkbox/store";
import { toggleCheckboxOne } from "../../Redux/Checkbox/actions";
import { toggleCheckboxTwo } from "../../Redux/Checkbox/actions";
import { useNavigate } from "react-router-dom";

interface SignUpProps {
  checkboxChecked: boolean;
  checkboxOneChecked: boolean;
  checkboxTwoChecked: boolean;
  toggleCheckbox: () => void;
  toggleCheckboxOne: () => void;
  toggleCheckboxTwo: () => void;
}

const SignUp: React.FC<SignUpProps> = ({
  checkboxOneChecked,
  checkboxTwoChecked,
  toggleCheckboxOne,
  toggleCheckboxTwo,
}) => {
  const navigate = useNavigate(); // Access the navigate function using useNavigate hook

  const handleCheckboxOneChange = () => {
    if (!checkboxOneChecked) {
      toggleCheckboxOne();
      if (checkboxTwoChecked) {
        toggleCheckboxTwo();
      }
      navigate("/signup");
    }
  };

  const handleCheckboxTwoChange = () => {
    if (!checkboxTwoChecked) {
      toggleCheckboxTwo();
      if (checkboxOneChecked) {
        toggleCheckboxOne();
      }
      navigate("/signup-talent");
    }
  };

  const getBoxStyle = (
    isCheckedOne: boolean,
    isCheckedTwo: boolean
  ): React.CSSProperties => {
    let backgroundColor = "rgba(100, 116, 139, 0.20)";
    if (isCheckedOne && !isCheckedTwo) {
      backgroundColor = "red";
    } else if (!isCheckedOne && isCheckedTwo) {
      backgroundColor = "red"; // Change this to the color you desire when checkbox two is checked and checkbox one isn't
    }
    return {
      width: "130px",
      height: "8px",
      borderRadius: "5px",
      background: "rgba(100, 116, 139, 0.20)",
      marginTop: "10px",
      marginBottom: "10px",
      backgroundColor,
    };
  };

  const boxStyle: React.CSSProperties = getBoxStyle(
    checkboxOneChecked,
    checkboxTwoChecked
  );

  const boxStyl: React.CSSProperties = {
    width: "130px",
    height: "8px",
    borderRadius: "5px",
    background: "rgba(100, 116, 139, 0.20)",
    marginTop: "10px", // Adjust as needed
    marginBottom: "10px", // Adjust as needed
    backgroundColor: "rgba(100, 116, 139, 0.20); ",
  };

  const boxSty: React.CSSProperties = {
    width: "130px",
    height: "8px",
    borderRadius: "5px",
    background: "rgba(100, 116, 139, 0.20)",
    marginTop: "10px", // Adjust as needed
    marginBottom: "10px", // Adjust as needed
    backgroundColor: "rgba(100, 116, 139, 0.20); ",
  };

  const containerStyle: React.CSSProperties = {
    // ... existing styles
    borderColor: checkboxOneChecked ? "red" : "#CBD5E1",
  };

  const containerStyl: React.CSSProperties = {
    // ... existing styles
    borderColor: checkboxTwoChecked ? "red" : "#CBD5E1",
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
  const typoTalent = {
    color: "#0F172A",
    fontFamily: "Outfit",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "140.625%",
  };

  const typoTale = {
    color: "#0F172A",
    fontFamily: "Outfit",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "140.625%",
  };

  const typoTalen = {
    color: "#94A3B8",
    fontFamily: "Outfit",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "140.625%",
    whiteSpace: "nowrap",
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
        <Container
          maxWidth="md"
          sx={{
            marginTop: {
              xs: "20px",
              sm: "20px",
              md: "20px",
              lg: "71px",
            },
          }}
        >
          <Paper
            elevation={0}
            style={{ padding: "20px", backgroundColor: "#F8FAFC" }}
          >
            <Typography align="center" sx={textWelcome}>
              Sign up to Colonees
            </Typography>
            <Typography align="center" sx={textStyle}>
              Select your account type to get started
            </Typography>

            <Box
              sx={{
                width: {
                  xs: "100% ",
                  sm: "100%",
                  md: "90%",
                  lg: "90%",
                },
                height: "100%",
                borderRadius: "20px",
                background: "#FFF",
                margin: "0 auto", // Center the box horizontally
                marginTop: "60px", // Add some top margin
                border: `1px solid ${containerStyle.borderColor}`,
                overflow: "hidden",
              }}
            >
              <Grid container>
                {/* Grid items go here */}
                <Grid item xs={7} sm={7}>
                  {/* Content for the first grid item */}
                  <Box
                    sx={{
                      marginLeft: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "40px",
                      },
                      marginTop: "43px",
                      maxWidth: "100%",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      onChange={handleCheckboxOneChange}
                      checked={checkboxOneChecked}
                    />
                    <Box
                      sx={{
                        marginTop: {
                          xs: "32px",
                          sm: "32px",
                          md: "32px",
                          lg: "44px",
                        },
                      }}
                    >
                      <Typography sx={typoTalent}>
                        Business, <br></br>
                        <Typography sx={typoTalen}>
                          looking to start or <br></br>build my business.
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={5} sm={5}>
                  <Box
                    sx={{
                      marginTop: "63px",
                      display: screenWidth <= 650 ? "none" : "block",
                    }}
                  >
                    <img
                      src={Man}
                      alt="Logo"
                      style={{ width: "90%", marginBottom: "-10px" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      marginTop: "63px",
                      marginLeft: "50px",
                      display: screenWidth <= 650 ? "block" : "none",
                    }}
                  >
                    <img
                      src={Mans}
                      alt="Logo"
                      style={{ width: "100%", marginBottom: "-10px" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                width: {
                  xs: "100% ",
                  sm: "100%",
                  md: "90%",
                  lg: "90%",
                },
                height: "auto",
                borderRadius: "20px",
                border: `1px solid ${containerStyl.borderColor}`,
                background: "#FFF",
                margin: "0 auto", // Center the box horizontally
                marginTop: "40px", // Add some top margin
                overflow: "hidden",
              }}
            >
              <Grid container>
                {/* Grid items go here */}
                <Grid item xs={7} sm={7}>
                  {/* Content for the first grid item */}
                  <Box
                    sx={{
                      marginLeft: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "40px",
                      },
                      marginTop: {
                        xs: "22px",
                        sm: "22px",
                        md: "22px",
                        lg: "43px",
                      },
                      maxWidth: "100%",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      onChange={handleCheckboxTwoChange}
                      checked={checkboxTwoChecked}
                    />
                    <Box
                      sx={{
                        marginTop: {
                          xs: "22px",
                          sm: "22px",
                          md: "22px",
                          lg: "44px",
                        },
                        maxWidth: "100%",
                      }}
                    >
                      <Typography sx={typoTale}>
                        Talent, <br></br>
                        <Typography sx={typoTalen}>
                          looking to join a team.
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={5} sm={5}>
                  <Box
                    sx={{
                      marginTop: "63px",
                      marginLeft: "20px",
                      display: screenWidth <= 650 ? "none" : "block",
                    }}
                  >
                    <img
                      src={Lady}
                      alt="Logo"
                      style={{
                        width: "90%",
                        height: "100%",
                        marginBottom: "-10px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      marginTop: "63px",
                      marginLeft: "50px",
                      display: screenWidth <= 650 ? "block" : "none",
                    }}
                  >
                    <img
                      src={Lady2}
                      alt="Logo"
                      style={{
                        width: "100%",
                        height: "auto",
                        marginBottom: "-10px",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  checkboxOneChecked: state.checkbox.checkboxOneChecked,
  checkboxTwoChecked: state.checkbox.checkboxTwoChecked,
  // ... other mapped states
});

const mapDispatchToProps = {
  toggleCheckboxOne,
  toggleCheckboxTwo,
  // ... other mapped actions
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
