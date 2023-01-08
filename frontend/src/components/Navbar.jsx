import { AppBar, Toolbar, styled, Typography, InputBase, Badge, TextField, Input, Menu, MenuItem } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import { Box } from '@mui/system';
import Notification from '@mui/icons-material/Notifications';
import { TextFields } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between',
});

const Searchbar = styled("div")(({theme}) => ({
  backgroundColor: 'white',
  padding:'0 10px',
  borderRadius: theme.shape.borderRadius,
  width:'40%'

}));

const Iconbox = styled(Box)(({theme}) => ({
  display: 'none',
  gap: theme.spacing(1),
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
  display: 'flex', 
  }

}));

const UserBox = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  }

}));

  const Navbar = () => {
  
    const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
      <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>BOOK RATE</Typography>
      <MenuBookIcon sx={{ display: {xs: 'block', sm: 'none'}}}/>
      <Searchbar><InputBase sx={{
        width: '100%',
        color: 'primary.dark',
      }}placeholder='What book are you looking for...?'></InputBase></Searchbar>
      <Iconbox>
        <Badge badgeContent={2} color='error'>
          <MailIcon color ="white"/>
        </Badge>
        <Badge badgeContent={4} color='error'>
          <Notification color ="white"/>
        </Badge>
        <Avatar sx={{
          width: 32,
          height: 32,
          alignItems: 'center',
          display: 'flex'
        }}src='https://images.unsplash.com/photo-1629209060003-8e1b2e1b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        onClick={e => setOpen(true)}
        />
        
      </Iconbox>
      <UserBox onClick={ e => setOpen(true) }>
      <Avatar sx={{
          width: 32,
          height: 32,
          alignItems: 'center',
          display: 'flex'
        }}src='https://images.unsplash.com/photo-1629209060003-8e1b2e1b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
        <Typography variant='span'>Igi</Typography>
      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>

  )
}
export default Navbar
