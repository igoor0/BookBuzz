import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import Home from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { ModeNight } from '@mui/icons-material';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box bgcolor={'background.default'} flex={1} p={3} sx={{ display: { xs: "none", sm:"block", display: 'inline-grid'}}}>
    <Box position='fixed'>
      <List>
      <ListItem disablePadding>
            <ListItemButton component='a' href="#home">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="HOME" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href="#STH">
              <ListItemIcon>
                <LibraryBooksIcon/>
              </ListItemIcon>
              <ListItemText primary="BOOKS" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href="#STH">
              <ListItemIcon>
                <FavoriteIcon/>
              </ListItemIcon>
              <ListItemText primary="FAVOURITES" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href="#STH">
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
              <ListItemText primary="WHATEVER" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href="#STH">
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="SETTINGS" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href="#STH">
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </Box>
    )
  }
  
  export default Sidebar
