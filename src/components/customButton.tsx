import React from 'react';
import Button from '@mui/material/Button';
import './customButton.css';
import {
  Typography,
} from '@mui/material';

interface CustomButtonProps {
  text: string;
  onClick: () => void; // Define the onClick function type
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  const buttonStyle = {
    display: 'flex',
    padding: '13px 166px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '5px',
    backgroundColor: '#E93223',
    color: '#FFF', // Text color
    width: '100%', // Make the width 100%
    maxWidth: '100%',
  };

  const textStyle = {
    color: '#FFF',
    fontFamily: 'Outfit',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '140.625%', /* 22.5px */
    textTransform: 'capitalize', // Transform the first letter to uppercase
    whiteSpace: 'nowrap',
    fontSize: {
      xs:'14px',
      sm:'14px',
      md:'14px',
      lg:'16px'
     }
  };

  // Modify the text to have only the first letter capitalized
  const modifiedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  return (
    <Button className="custom-button" sx={buttonStyle} onClick={onClick}>
      <Typography sx={textStyle}>{modifiedText}</Typography>
    </Button>
  );
};

export default CustomButton;
