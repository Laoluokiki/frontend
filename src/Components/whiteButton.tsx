import React from 'react';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Typography,
} from '@mui/material';

interface LinkButtonProps {
  text: string;
  icon: string;
  width?: string; // Define the width prop as an optional string
  onClick: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, icon, width, onClick }) => {
  const textStyle = {
    color: '#000',
    fontFamily: 'Outfit',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '140.625%',
    textTransform: 'capitalize', // Transform the first letter to uppercase
    marginRight: '10px',
    whiteSpace: 'nowrap',
    fontSize: {
      xs:'12px',
      sm:'12px',
      md:'14px',
      lg:'16px'
     }
  };

  const buttonStyle = {
    display: 'flex',
    padding: '13px 17px 14px 17px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    background: '#FFF',
    border: 'none',
    cursor: 'pointer',
    width: width || '40%', // Use the provided width or set it to 'auto' by default
  };

  // Modify the text to have only the first letter capitalized
  const modifiedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  return (
    <Button style={buttonStyle} onClick={onClick}>
      <Typography sx={textStyle}>{modifiedText}</Typography>
      {icon === 'linkedin' ? (
        <LinkedInIcon fontSize="small" />
      ) : (
        icon // Assuming 'icon' is a string like "add" for other icons
      )}
    </Button>
  );
};

export default LinkButton;
