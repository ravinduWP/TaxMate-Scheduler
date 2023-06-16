import { AppBar, Box,Checkbox,Divider,ListItemIcon,ListItemText,MenuItem,MenuList,Toolbar, Typography} from '@mui/material';
import { auto } from '@popperjs/core';
import React from 'react';

const options = [
  'Taxation',
  'Financial accounts',
  'Xero Training',
  'Bookkeeping',
  'Payroll service',
  'Other services',
];


const EventForm = () => {
  const [selectedIndex, setSelectedIndex] = React.useState();
  const handleMenuItemClick = ( index) => {
    setSelectedIndex(index);
  };
  
  return (
   <div>
     <AppBar position="static" variant='elevation' style={{backgroundColor:'#FFFFFF'}}>
        <Toolbar>

          <img src='assets/img/logo/logo.png' alt='logo' style={{width:'260px', height:'130px', margin:'auto' }}/>
          
        </Toolbar>
      </AppBar>
      <Box width={800} height={auto} mx={auto} mt={2} p={3} textAlign={'center'}  borderRadius={2} bgcolor={'#FAF9F6'}> 
      <Typography align='center' >Select the Service you want</Typography>     
      <MenuList sx={{  p: 2,width:'400px',margin:'auto',backgroundColor:'#FFFFFF'}} >
      {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick( index)}
            sx={{p: 2}}
            
          >
            {option}
          </MenuItem>
        ))}
      </MenuList>
      </Box>
   </div>
  );
};

export default EventForm;
