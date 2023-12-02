import React from 'react';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import logo from '../assets/Logo.png';

interface NavbarProps {
 
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <AppBar position="static" elevation={0} sx={{backgroundColor:'white'}}>
      <Toolbar sx={{backgroundColor:'white'}}>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '16px', marginTop:'43px' }} />

        </Typography>
       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
