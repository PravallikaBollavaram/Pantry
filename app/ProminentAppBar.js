import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { TextField } from '@mui/material';
import Home from './page';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center', // Center items vertically
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));

export default function ProminentAppBar({handleSearchChange, searchQuery}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}> {/* Set max width and center */}
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6" // Use responsive typography variant
            noWrap
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center' }} // Center the text
          >
            Pantry
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}> {/* Hide search on small screens */}
          <TextField
          label="Search Item"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{marginTop:2}}
        />
            {/* <IconButton size="large" aria-label="search" color="inherit">

              <SearchIcon />
            </IconButton> */}
          </Box>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
