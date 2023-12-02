import React from "react";
import Button from "@mui/material/Button";
import GoogleCombinedIcon from "./GoogleIcon";
import { Typography } from "@mui/material";

interface CustomButtonProps {
  text: string;
  icon: string;
  width?: string;
  onClick: () => void;
}

const GoogleButton: React.FC<CustomButtonProps> = ({
  text,
  icon,
  width,
  onClick,
}) => {
  const textStyle = {
    color: "#000",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140.625%",
    textTransform: "capitalize", // Transform the first letter to uppercase
    marginRight: "10px",
    whiteSpace: "nowrap",
    fontSize: {
      xs: "12px",
      sm: "12px",
      md: "14px",
      lg: "16px",
    },
  };

  // Modify the text to have only the first letter capitalized
  const modifiedText =
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  return (
    <Button
      style={{
        display: "flex",
        padding: "13px 17px 14px 17px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        width: width || "40%",
        background: "#FFF",
        border: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Typography sx={textStyle}>{modifiedText}</Typography>
      {icon === "google" ? <GoogleCombinedIcon /> : icon}
    </Button>
  );
};

export default GoogleButton;
